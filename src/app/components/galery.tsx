"use client";
import React from "react";
import Image from "next/image";

export function MasonryGridGallery() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/image-comit.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/images/cardComitment.jpeg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/fotoHero.png"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/comit2-image.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/comit2-image.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/images/comit2-image.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/image-comit.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/images/comit2-image.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/comit2-image.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/comit2-image.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/images/image-comit.jpg"
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
            </div>
        </div>
    );
}
