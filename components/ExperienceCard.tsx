import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img
         initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://lh3.googleusercontent.com/JSy_R71mCRKryemYkhdaGAiwj229BADnFrD_gOL6g_O_sHmtz_2lR6yVx1HmSBm3WmhFzSo8m6W5Dgnd63o_3g9iQ7S1TId_4kjZPj_M-2j37bNrGpc6EUn_qt6jqN7NeSvIn5HQ-j0QX50VD01IZUhFXuRvBmcnkwTFytJQgi6fesPf4PXxATRHl8MoRtTfkH8nwc1c33NgNV3MnKFXwJZiOxk7aCTp8jsXlNCQ1hT74_ii6mNQuvVesU032tKHJqEFrzd3UD3P-meAnSIHrBVlAIhPSRGvupiezYhg1bP-aXhMr_op6io_SqvYtWFxN2IUtWFHeyH_xcIRP_cKdzn2qlFLrx-2j2ecWBvz5Rki_NdPVs_sxf9kemq5q6JU7g-Sxzf9vGQvEejqxjF99_DghNT219Hrg2WHp-Vy-KX4GYANjJji1d683X2f8wlastKAVFZ4EapUJilqKp0znHDQMW7H1aLAqaWS2rG6lZCKdbwCZ6vmahBqQVvkAzxrRPBJbrBob3IDYLkvjkADqmxq6AvovQPBoY42X1vdgtRGP4PqtqD_jlVl4QFzNzwo5n365dyGZ7o1dO30vB7J9hbhTPkgH33XytDUbYdcKmHvsv2hmOlnsZxinXunyj0hMo4kh8bYdYPsnHlJ7j1rsRl1YzD7ZD3hpeYUKe83AorHdl1An6eVpBbG-BrXHaOuhZbzwX00AG1uvzq4kpEM9VguZRB1YWREybTsG2ezdDjRjQWSRp3uOorvDrW7SFy7x9EK78Tqf75DL8U3b6P5G7svFKnA5PXawgl-ryjBlFu5b0_rcEIHdmR9HHzwO03XCelaRdJj99mwMy62eojUtTjryr6Rbe9dR3v8Cp8nx8SE7I6SXrmMWafUdMidH7OpLTDVoemagq1kZu-ykGTT6suitKmrzsqNs3PKcaFG2w=w703-h937-no?authuser=0" alt="" 
        />

        <div>
          <h4>CEO of IMRANs Leanring</h4>
          <p>IMRANs </p>
          <div>
            {/* tech used */}
            {/* tech used */}
            {/* tech used */}
          </div>
          <p>Started work... - Ended...</p>

          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
          </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard