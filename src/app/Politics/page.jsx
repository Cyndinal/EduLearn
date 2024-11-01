import React from 'react';
import Image from "next/image";

function Page(props) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div>
                <Image width={200} height={100} src={'/Healthy.jpeg'} alt={"Health"} />
                <blockquote>
                    The new dimension of political bespoke it trending a new wave
                    The new dimension of political bespoke it trending a new wave

                </blockquote>
            </div>

            <div>
                <Image width={200} height={100} src={'/Healthy.jpeg'} alt={"Health"} />
                <blockquote>
                    The new dimension of political bespoke it trending a new wave
                    The new dimension of political bespoke it trending a new wave

                </blockquote>

            </div>

            <div>
                <Image width={200} height={100} src={'/Healthy.jpeg'} alt={"Health"} />
                <blockquote>
                    The new dimension of political bespoke it trending a new wave
                    The new dimension of political bespoke it trending a new wave

                </blockquote>
            </div>

            <div>
                <Image width={250} height={150} src={'/Healthy.jpeg'} alt={"Health"} />
                <blockquote>
                    The new dimension of political bespoke it trending a new wave
                    The new dimension of political bespoke it trending a new wave

                </blockquote>
            </div>
            <div>5</div>

            <div>9</div>
        </div>
    );
}

export default Page;