import React from "react";

const PortofolioDetail = ({
    params,
}: {
    params: { id: string; title: string };
}) => {
    const { id, title } = params;
    const LIST_CARD_PORTO = [
        {
            id: id,
            imgUrl: "/images/heroBg.jpeg",
            title: title,
            description: "Description of your first project",
        },
    ];

    // {
    //     id: id,
    //     imgUrl: "/images/heroBg.jpeg",
    //     title: "Project Title 2",
    //     description: "Description of your first project",
    // },
    // {
    //     id: id,
    //     imgUrl: "/images/heroBg.jpeg",
    //     title: "Project Title 3",
    //     description: "Description of your first project",
    // },
    // {
    //     id: id,
    //     imgUrl: "/images/heroBg.jpeg",
    //     title: "Project Title 4",
    //     description: "Description of your first project",
    // },
    return (
        <main>
            {LIST_CARD_PORTO.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item?.id}</h1>
                        <h1>{item?.title}</h1>
                    </div>
                );
            })}
        </main>
    );
};

export default PortofolioDetail;
