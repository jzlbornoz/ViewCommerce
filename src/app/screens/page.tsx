
import { Inter } from 'next/font/google'
import { Screens } from '@/components/Screens'
import screensData from '../../screensData.json';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Screens />
  )


}
