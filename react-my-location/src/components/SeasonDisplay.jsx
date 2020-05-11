import React from "react";

const SeasonConfig = {
    Kemarau: {
        color: 'bg-warning',
        icon: 'fa fa-sun-o'
    },
    Hujan: {
        color: 'bg-primary',
        icon: 'fa fa-umbrella'
    }
};

function getSeason(mm) {
    if (mm > 2 && mm < 9) {
        return 'Kemarau';
    } else {
        return 'Hujan';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(new Date().getMonth());
    /* const icon = season === 'Hujan' ? 'fa fa-umbrella' : 'fa fa-sun-o';
    const color = season === 'Hujan' ? 'bg-primary' : 'bg-warning'; */
    const { color, icon } = SeasonConfig[season];

    return (
        <div>
            <h2>Musim</h2>
            <div className={`p-3 mb-2 ${color} text-white`}>
                <div><i className={icon}></i></div>
                <div>{season}</div>
            </div>
        </div>
    );
}

export default SeasonDisplay;