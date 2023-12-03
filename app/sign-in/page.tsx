import { auth } from '@/auth'
import { LoginButton, GoogleLoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
    <LoginButton />
    <div style={{ width: '20px' }}></div>
    <GoogleLoginButton />
    <p>Impact-Site-Verification: d246b9f6-0290-457b-b91a-5758e1d63ecc</p>
    </div>
  )
}
