import React from 'react';

type MinutesSliderProps = {
    label?: string;
    value: number;
    onValueChange: (value: number)=> void;
    min?: number;
    max?: number;
    step?: number;
    style?: React.CSSProperties;
};

const MinutesSlider: React.FC<MinutesSliderProps> = ({
    label,
    value,
    onValueChange,
    min = 0,
    max = 60,
    step = 1,
    style,
}) => {
    return (
        <input
            type='range'
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onValueChange(Number(e.target.value))}
            style={style}
        />
    );
};


export default MinutesSlider;
