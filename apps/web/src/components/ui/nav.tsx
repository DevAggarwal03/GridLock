'use client'

import { Button } from "./button"
import { Gamepad2, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export default function Nav() {
  const router = useRouter() 
  const [walletAddress, setWalletAddress] = useState<`0x${string}` | undefined>(undefined);
  const {address} = useAccount();
  const {user, isLoaded, isSignedIn} = useUser()
  const username = process.env.NEXT_PUBLIC_USERNAME 

  useEffect(() => {
    setWalletAddress(address)
  }, [address])
 
  useEffect(() => {
    // if(isLoaded){
    //   if(!user){
    //     router.push('/');
    //   }else{
    //     console.log(user?.username);
    //   }
    // }
      console.log(username);
    
  }, [isLoaded])


  return (
    <div>
        <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 hover:cursor-pointer" onClick={() => router.push('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center" >
                <Gamepad2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-glow">GridLock</span>
            </div>
            <div className="flex items-center space-x-4">
              {
                username && <Link href={'/scheduledMatches'}>
                  <Button
                  value="ghost"
                  className="text-foreground bg-black hover:text-black">
                    Live Matches  
                  </Button>
                </Link>
              }
              {
              username && <Link href={'/game/myGames'}>
                <Button 
                variant="ghost" 
                className="text-foreground hover:text-black">
                  My Games  
                </Button>
              </Link>
              }
              <Link href={'/game'}><Button variant="ghost" className="text-foreground hover:text-black">
                Games
              </Button></Link>
              {
                username ?  <Link href={'/profile'}><Button variant="ghost" className="text-foreground hover:text-black">
                  Profile 
                </Button></Link> : <Link href={'/auth'}><Button variant="ghost" className="text-foreground hover:text-black">
                  SignUp 
                </Button></Link>
              }
              {
                walletAddress && <Link href={'/redeem'}><Button variant="ghost" className="text-foreground hover:text-black">
                  Redeem 
                </Button></Link>
              }
              <ConnectButton/>     
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

// line 8 and 63 are wrong change username to user