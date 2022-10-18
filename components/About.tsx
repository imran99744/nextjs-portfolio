import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://lh3.googleusercontent.com/4Fi0kVS9ZQXrfMogpFMNPtPTcF4caXS_z0Y1cibC_XmDFQNwPz-xGGzVz18KQp1nckDOkXru_7pE_mBKsc8ssBz4XfM2lIFqaa2_FxpxLtQFlcxnn6tjdBIo3riqwIt5Hvo9pCRjVMhTb5M9Yxdotf_F2gFNx_na79Hhlkahurga4GvvXALBDVS_s3TEG9-jQvq8naUJCfc9WLyz7yoDVFlfEDDeoxQ8CflfQWJ2hFC2gf7TlAYamili6T0C0FoMsz37CuwxCCI3mZSdq3ityb2u76_A3Dn-o0P6Lhtv3MYGMn-xCcudD7IASHPIhQKcXiDgggIuIMQ_cXUYXIrcO5g6gEjJPHZNJ9Gk2A4Vx9o6acNskAB_wkQtsodnxdbyuiS_oAKSrrirIOCyQxO-GBzDuAVG7jKQFq45DX-jlAZPdrQ5t6fYwodsM9ay7B0nvsbl_DLpi8TTLYFrrg8bB0k8z-GBvJFIF24os5M7ALYjze8z752bRZnaNoRfnrfmFwjvwOmaeQEzeEqIjRRv--hwI4plne1TepgSZCm96p6BFJgUFXuBTMiptLroudxjH1elO1qsG4elnA4HCupedxZPxdebI592qjj6vYghpQtQQ-F9foTZrxuWbKs1j-aLqtXkns42kAmQ6nW94w5kOgIqkOQvZ4pJbDF2JBgyEQhzJMfo52aEy-tWTqzmqG76aD0EMjILu_p-rDrWDWluG3PlTs_sAMWLuoxKTvWcDM7Ttst11_kCvHnoAFH5TiA_2YemNiaXvouunVGJve4yTwTAu-XL3YIcc5_pMxF9CMpHERGJ7t-E4ohZ3WV38FSBbOEk3eqA9__YQ0Bm5hIdKJqy0ofSumK_raYUUQXOvHMQDWy5nDBYhLed6r4__fhU-haC7rNoZOL38Ho995AoEZRvm954BK7TAGGTFhcJOg=s768-no?authuser=0"
        className="-mb-20 md:mb-0 mt-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decration-[#F7AB0A]/50">Little</span>{" "}
          background
        </h4>
        <p className="text-base">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
