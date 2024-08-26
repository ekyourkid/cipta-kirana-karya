"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GALERY_IMAGE } from "@/utils/data";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultGallery() {
    const [params, setParams] = useState({ limit: 5, page: 1, offSet: 0 });
    const [active, setActive] = React.useState(1);
    const [data, setData] = useState([]);

    const handlePaginate = () => {
        const valueData = GALERY_IMAGE.filter(
            (item, index) => index >= params.offSet && index <= params.limit
        );
        console.log(valueData);
        setData(valueData as any);
    };

    const getItemProps = (index: any) =>
        ({
            variant: active === index ? "filled" : "text",
            color: "gray",
            onClick: () => setActive(index),
        } as any);

    const next = () => {
        if (active === params.limit) return;
        setParams({
            limit: params.limit,
            page: 2,
            offSet: params.offSet + params.limit,
        });
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setParams({
            limit: params.limit - 5,
            page: params.page - 1,
            offSet: params.limit - params.offSet,
        });
        setActive(active - 1);
    };

    useEffect(() => {
        handlePaginate();
    }, [params]);

    console.log(data);
    return (
        <main>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data?.map((item: any, index) => (
                    <div key={index}>
                        <Image
                            className="h-40 w-full max-w-full rounded object-cover object-center"
                            src={item?.image as string}
                            width={400}
                            height={400}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex items-center gap-4">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={active === 1}
                    {...({} as any)}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />{" "}
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                    <IconButton {...getItemProps(4)}>4</IconButton>
                    <IconButton {...getItemProps(5)}>5</IconButton>
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={active === 5}
                    {...({} as any)}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </main>
    );
}
