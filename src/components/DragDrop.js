import React from 'react';
import Picture from './Picture';
export const PictureList = [
    {
        id: 1,
        url:
            "https://media.istockphoto.com/photos/teacher-desk-full-of-books-against-a-blackboard-background-whit-copy-picture-id1251272960?b=1&k=20&m=1251272960&s=170667a&w=0&h=Qmt1F9P1-XQB4DqLqMLHXbGxI4j_92CZkrAHukjJk3E=",
    },
    {
        id: 2,
        url:
            "https://image.freepik.com/free-photo/educational-objects-assortment-close-up_23-2148721260.jpg",
    },
    {
        id: 3,
        url:
            "https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?size=626&ext=jpg",
    },
];

const DragDrop = () => {

    return (
        <>
            <div className="Pictures">
                {PictureList.map((picture) => {
                    return <Picture url={picture.url} key={picture.id} id={picture.id} />;
                })}
            </div>

        </>
    );
};

export default DragDrop;