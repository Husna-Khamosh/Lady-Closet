
import React from "react";

function FilterSidebar({
    shops,
    priceRange,
    setPriceRange,
    selectedShops,
    setSelectedShops,
    minRating,
    setMinRating
}) {

    function handleShopChange(shop) {
        if (selectedShops.includes(shop)) {
            setSelectedShops(
                selectedShops.filter(function (item) {
                    return item !== shop;
                })
            );
        } else {
            setSelectedShops([...selectedShops, shop]);
        }
    }

    return (
        <aside className="filter-sidebar">

            <h3>Filters</h3>
            <div className="filter-section">
                <h4>PRICE (AFN)</h4>

                <div className="price-inputs">
                    <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) =>
                            setPriceRange({
                                ...priceRange,
                                min: Number(e.target.value)
                            })
                        }
                    />

                    <span>to</span>

                    <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) =>
                            setPriceRange({
                                ...priceRange,
                                max: Number(e.target.value)
                            })
                        }
                    />
                </div>
            </div>

            <div className="filter-section">
                <h4>SHOP</h4>

                {shops.map(function (shop) {
                    return (
                        <label className="filter-option" key={shop}>
                            <input
                                type="checkbox"
                                checked={selectedShops.includes(shop)}
                                onChange={() => handleShopChange(shop)}
                            />

                            <span>{shop}</span>
                        </label>
                    );
                })}
            </div>

            <div className="filter-section">
                <h4>RATING</h4>

                {[4.5, 4, 3.5].map(function (rating) {
                    return (
                        <button
                            key={rating}
                            className={
                                minRating === rating
                                    ? "rating-filter active"
                                    : "rating-filter"
                            }
                            onClick={() =>
                                setMinRating(
                                    minRating === rating ? 0 : rating
                                )
                            }
                        >
                            {rating}+
                        </button>
                    );
                })}
            </div>

        </aside>
    );
}

export default FilterSidebar;
