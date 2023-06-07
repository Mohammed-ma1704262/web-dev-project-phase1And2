import { Inter } from 'next/font/google'
import AccountsRepo from './api/users-repo'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  //const initialAccounts = await new AccountsRepo().getAccounts()
  // console.log(initialAccounts);
  return (
    <>
      {/* <AccountsTable initialAccounts={initialAccounts}></AccountsTable> */}
    </>
  )
}
