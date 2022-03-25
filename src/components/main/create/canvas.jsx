/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
import React, { createRef, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layer, Stage } from 'react-konva';
import { IndividualSticker } from './stickers';
import './canvas.scss';
import { useAppSelector } from '../../../redux/hooks';
import { getItems } from '../../../services/api/item-api';
import loadItems from '../../../redux/item/action-creators';

function Canvas() {
    const dispatch = useDispatch();
    const itemState = useAppSelector((state) => state.items);

    useEffect(() => {
        getItems().then(() => {
            dispatch(loadItems());
        });
    }, []);

    const [images, setImages] = useState([]);

    const addStickerToPanel = ({ src, width, x, y }) => {
        setImages((currentImages) => [
            ...currentImages,
            {
                width,
                x,
                y,
                src,
                resetButtonRef: createRef(),
            },
        ]);
    };

    const resetAllButtons = useCallback(() => {
        images.forEach((image) => {
            if (image.resetButtonRef.current) {
                image.resetButtonRef.current();
            }
        });
    }, [images]);

    const handleCanvasClick = useCallback(
        (event) => {
            if (event.target.attrs.id === 'backgroundImage') {
                resetAllButtons();
            }
        },
        [resetAllButtons]
    );

    return (
        <div className="canvas">
            <Stage
                width={400}
                height={600}
                onClick={handleCanvasClick}
                onTap={handleCanvasClick}
                className="stage"
            >
                <Layer>
                    {images.map((image, i) => (
                        <IndividualSticker
                            onDelete={() => {
                                const newImages = [...images];
                                newImages.splice(i, 1);
                                setImages(newImages);
                            }}
                            onDragEnd={(event) => {
                                image.x = event.target.x();
                                image.y = event.target.y();
                            }}
                            key={i}
                            image={image}
                        />
                    ))}
                </Layer>
            </Stage>
            <div className="stickers">
                <input
                    className="sticker__search"
                    type="text"
                    placeholder="Search"
                />
                <div className="sticker__container__buttons">
                    <button type="button" className="stiker__button">
                        Category
                    </button>
                    <button type="button" className="sticker__button">
                        Price
                    </button>
                </div>

                {itemState.items.map((item) => (
                    <button
                        type="button"
                        className="button"
                        onMouseDown={() => {
                            addStickerToPanel({
                                src: item.img,
                                width: '20px',
                                x: 100,
                                y: 100,
                            });
                        }}
                    >
                        <img alt="none" src={item.img} width="100px" />
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Canvas;
