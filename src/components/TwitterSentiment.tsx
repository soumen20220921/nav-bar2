import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import productContext from "@/context/context";
const TwitterSentiment = () => {

    const context = useContext(productContext);
    const mode = context?.mode;
    const setModeFun = () => {
        if (context) {
            context.setMode(!mode);  // Use context.setMode safely
        }
    };

    return (
        <div className={`h-[100vh] w-full flex justify-center items-center ${mode ? `bg-white` : `bg-black`}`}>
            <div className={`h-[390px] min-w-72 w-[20%] ${mode ? `bg-white` : `bg-black`} rounded-2xl border-2 `}>
                <div className={`h-[20%] w-full p-3 font-semibold text-2xl flex justify-between items-end`}>
                    <p className={`${mode ? 'text-black' : 'text-white'}`}>Twitter Sentiment</p>
                    <img
                        className="h-6 w-6 mb-[3px]"
                        src={mode ? "https://img.icons8.com/ios/50/circled-i.png" : "https://img.icons8.com/ios/50/FFFFFF/circled-i.png"}
                        alt="Info"
                    />
                </div>
                <div className="h-[60%] relative flex justify-center items-center">
                    <img src="https://demo.coinmetro.com/dashboard/sentiment-chart/gauge-bg.svg?fb576936" alt="speed meter" />
                    <div className={`text-black absolute bottom-16`}>10</div>
                    <select
                        id="options"
                        name="options"
                        className={`absolute top-36 w-14 h-7 text-lg font-semibold ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}
                    >
                        <option value="option1">BTC</option>
                        <option value="option2">ETH</option>
                    </select>
                </div>
                <div className="text-white h-[20%] flex justify-center items-start">
                    <Button variant="destructive" className="bg-blue-500 w-64 md:w-[90%] h-12 rounded-xl font-semibold">Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default TwitterSentiment;
