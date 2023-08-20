import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";




// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";

export default function App() {



    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="cardFiver group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl h-auto"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-00 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 90%
            )
          `,
                }}
            />
            <div className=" w-full flex flex-row ">
                <div className="pb-10 wrap w-1/2 flex justify-center items-center">
                    <img className='w-full mb-6' src="https://www.zensor.com.tw/images//Index-Img/Product-Img/無線恆電位儀-OUT.webp" alt="" />
                </div>
                <div className="wrap w-1/2">
                    <div>
                        <h3 className="text-base font-semibold leading-7 text-sky-500">
                            PotentioStrip
                        </h3>
                        <div className="mt-2 flex items-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-white">
                                讓我們的試片，長出自己的電路系統
                            </span>
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            我們的核心技術
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}