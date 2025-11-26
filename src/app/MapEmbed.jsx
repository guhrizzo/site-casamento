'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MapaBonito() {
  return (
    <div className="min-h-[70vh] w-[99vw] flex  items-center justify-center bg-[#F5F6F8] ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
          <CardContent className="p-6 space-y-5">
            
            <h1 className="text-2xl font-semibold text-gray-700 text-center">
              Local do Casamento
            </h1>

            <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4600.267000803478!2d-48.516976899999996!3d-22.287441800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf68566c1be8fb%3A0xd84dc48a5fa1d6bb!2sAv.%20Brasil%2C%20440%20-%20Centro%2C%20Barra%20Bonita%20-%20SP%2C%2017340-000!5e1!3m2!1spt-BR!2sbr!4v1732574180187!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex justify-center">
              <Button
                asChild
                className="px-6 py-2 rounded-xl text-white font-medium bg-gray-700 hover:bg-gray-800 shadow"
              >
                <a
                  href="https://www.google.com/maps/place/Av.+Brasil,+440+-+Centro,+Barra+Bonita+-+SP"
                  target="_blank"
                >
                  Abrir no Google Maps
                </a>
              </Button>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
