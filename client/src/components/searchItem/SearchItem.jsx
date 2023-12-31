import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/501096896.webp?k=32bf128fe3c7ae9b482d73b879502558b6c36055ea587f3cf57eebac305b8460&o="
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio • 1 bathroom • 21m2 1 full bed</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>

        </div>
    )
}

export default SearchItem