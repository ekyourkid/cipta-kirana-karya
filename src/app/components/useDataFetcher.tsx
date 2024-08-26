import React, { useEffect, useState } from "react";
import { GALERY_IMAGE } from "@/utils/data";

const useDataFetcher = () => {
    const data = GALERY_IMAGE;
    console.log(data);
};

export default useDataFetcher;
