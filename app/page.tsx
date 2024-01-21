import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginForm from './ui/login-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 ">
      <LoginForm />
    </main>
  );
}
