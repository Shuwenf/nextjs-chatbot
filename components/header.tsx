import * as React from 'react'
import Link from 'next/link'

import { auth } from '@/auth'
import { clearChats } from '@/app/actions'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import { SidebarList } from '@/components/sidebar-list'
import {
  IconNextChat,
  IconSeparator,
  IconGoodsGPT
} from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'

export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 grid grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)] items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        {session?.user ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={session?.user?.email} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : null}
        {session?.user ? (
          <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          <UserMenu user={session.user} />
          </div>
        ) : null}
      </div>
      <div className="flex items-center flex-grow space-x-2">
        <IconGoodsGPT />
        <span className="hidden ml-2 md:flex">GoodsGPT</span>
      </div>
    </header>
  )
}
