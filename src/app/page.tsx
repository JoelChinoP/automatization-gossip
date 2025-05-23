import Link from 'next/link';
import { GradientBackground } from '@/components/organisms';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';

export default function Home() {
  return (
    <GradientBackground>
      <div className="container mx-auto py-16 px-4 min-h-screen flex flex-col items-center justify-center">
        <Typography variant="h1" className="text-center mb-8 text-white text-4xl">
          ¡Bienvenido a Gossip!
        </Typography>
        
        <Typography variant="body" className="text-center mb-12 text-white text-xl">
          La plataforma para enviar y recibir mensajes anónimos
        </Typography>
        
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Link href="/message" className="w-full">
            <Button variant="primary" className="w-full">
              Enviar mensaje
            </Button>
          </Link>
          
        </div>
      </div>
    </GradientBackground>
  );
}
