
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *  - image
 *  - Name of Res, Star Rating, Cuisine , deleivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    
return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
        className="res-logo"
        alt="res-logo"
        src= {
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            + cloudinaryImageId} 
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
);
};

const resList= [
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "199662",
        "name": "Apna Sweets",
        "uuid": "47902b76-bc91-4958-84a6-7b34751d19f7",
        "city": "18",
        "area": "New Palasia",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mt3fufsppct9b2k59ovu",
        "cuisines": [
        "North Indian",
        "Sweets",
        "Beverages",
        "Street Food",
        "South Indian",
        "Fast Food",
        "Chinese",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
        "restaurant": "apna-sweets-new-palasia-new-palasia",
        "city": "indore"
        },
        "cityState": "18",
        "address": "Apna sweets, New Palasia, Indore, Madhya Pradesh, India",
        "locality": "Scheme 55",
        "parentId": 8960,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
        {
        "meta": "40% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹80 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹80 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3000,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6463643~p=7~eid=00000187-9944-e5b0-278c-72b700b1071d",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "199662",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 3.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
            "type": "F",
            "id": "84070",
            "name": "Gurukripa Restaurant  Sarwate",
            "uuid": "1e86e574-fa54-48f8-96f7-7ba27b0f635b",
            "city": "18",
            "area": "South Tukoganj",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
            "cuisines": [
            "North Indian",
            "Thalis",
            "Indian",
            "Fast Food",
            "Chinese",
            "Beverages",
            "Desserts",
            "Jain",
            "Punjabi"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
            "restaurant": "shree-gurukripa-sarwate-bus-stand-south-tukoganj",
            "city": "indore"
            },
            "cityState": "18",
            "address": "Sarwate Bus Stand, Indore",
            "locality": "Sarwate",
            "parentId": 92204,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
            {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
            {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
            "fees": [
            {
            "name": "distance",
            "fee": 2500,
            "message": ""
            },
            {
            "name": "time",
            "fee": 0,
            "message": ""
            },
            {
            "name": "special",
            "fee": 0,
            "message": ""
            }
            ],
            "totalFees": 2500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2500",
            "icon": ""
            },
            "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
            "restaurantId": "84070",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 2.0999999046325684,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
            },
            "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                "type": "F",
                "id": "607924",
                "name": "Lal Balti Ki Kachori",
                "uuid": "59d9e613-885b-403c-ab3d-aa8154e11872",
                "city": "18",
                "area": "Tilak Path Rambagh",
                "totalRatingsString": "50+ ratings",
                "cloudinaryImageId": "tk6e62dwwunq1lnnex1p",
                "cuisines": [
                "Snacks"
                ],
                "tags": [],
                "costForTwo": 4000,
                "costForTwoString": "₹40 FOR TWO",
                "deliveryTime": 17,
                "minDeliveryTime": 17,
                "maxDeliveryTime": 17,
                "slaString": "17 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                "restaurant": "anand-aloo-ki-kachori-sarafa-sarafa",
                "city": "indore"
                },
                "cityState": "18",
                "address": "86,TILAK PATH RAMBAGH INDORE ",
                "locality": "Tilak Path Rambagh",
                "parentId": 320955,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "chain": [],
                "feeDetails": {
                "fees": [
                {
                "name": "distance",
                "fee": 2500,
                "message": ""
                },
                {
                "name": "time",
                "fee": 0,
                "message": ""
                },
                {
                "name": "special",
                "fee": 0,
                "message": ""
                }
                ],
                "totalFees": 2500,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2500",
                "icon": ""
                },
                "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                "restaurantId": "607924",
                "deliveryTime": 17,
                "minDeliveryTime": 17,
                "maxDeliveryTime": 17,
                "lastMileTravel": 0.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.6",
                "totalRatings": 50,
                "new": false
                },
                "subtype": "basic"
                },
                {
                    "type": "restaurant",
                    "data": {
                    "type": "F",
                    "id": "536863",
                    "name": "La Pino'z Pizza",
                    "uuid": "07ffbc29-b472-43b2-be2a-15fa335cfe5b",
                    "city": "18",
                    "area": "Sarafa",
                    "totalRatingsString": "500+ ratings",
                    "cloudinaryImageId": "yilup8crpakgkgii0pjb",
                    "cuisines": [
                    "Pizzas",
                    "Snacks",
                    "Italian"
                    ],
                    "tags": [],
                    "costForTwo": 40000,
                    "costForTwoString": "₹400 FOR TWO",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "slaString": "25 MINS",
                    "lastMileTravel": 3.5,
                    "slugs": {
                    "restaurant": "la-pino'z-sarafa-sarafa",
                    "city": "indore"
                    },
                    "cityState": "18",
                    "address": "621 kalani Nagar, airport road, Indore -452001",
                    "locality": "kalani Nagar",
                    "parentId": 4961,
                    "unserviceable": false,
                    "veg": true,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "ribbon": [
                    {
                    "type": "PROMOTED"
                    }
                    ],
                    "chain": [],
                    "feeDetails": {
                    "fees": [
                    {
                    "name": "distance",
                    "fee": 3000,
                    "message": ""
                    },
                    {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                    },
                    {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                    }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                    },
                    "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=6514339~p=25~eid=00000187-9944-e5b0-278c-72bd00b1191d",
                    "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                    },
                    "lastMileTravelString": "3.5 kms",
                    "hasSurge": false,
                    "sla": {
                    "restaurantId": "536863",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 3.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "3.6",
                    "totalRatings": 500,
                    "new": false
                    },
                    "subtype": "basic"
                    },
                    {
                        "type": "restaurant",
                        "data": {
                        "type": "F",
                        "id": "608880",
                        "name": "ONE TREE RESTAURANT",
                        "uuid": "08ce97ef-effd-4f3e-b1b3-362cf3c64699",
                        "city": "18",
                        "area": "Sarafa",
                        "totalRatingsString": "100+ ratings",
                        "cloudinaryImageId": "kxotjckwgyzbxkzfqbhb",
                        "cuisines": [
                        "North Indian",
                        "Snacks",
                        "Biryani"
                        ],
                        "tags": [],
                        "costForTwo": 35000,
                        "costForTwoString": "₹350 FOR TWO",
                        "deliveryTime": 29,
                        "minDeliveryTime": 29,
                        "maxDeliveryTime": 29,
                        "slaString": "29 MINS",
                        "lastMileTravel": 0.30000001192092896,
                        "slugs": {
                        "restaurant": "one-tree-restaurant-sarafa-sarafa",
                        "city": "indore"
                        },
                        "cityState": "18",
                        "address": "126 KRISHNAPURA 1ST FLOOR MG ROAD RAJWADA INDORE",
                        "locality": "Mg Road ",
                        "parentId": 362169,
                        "unserviceable": false,
                        "veg": false,
                        "select": false,
                        "favorite": false,
                        "tradeCampaignHeaders": [],
                        "aggregatedDiscountInfo": {
                        "header": "60% off",
                        "shortDescriptionList": [
                        {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                        ],
                        "descriptionList": [
                        {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                        },
                        "aggregatedDiscountInfoV2": {
                        "header": "60% OFF",
                        "shortDescriptionList": [
                        {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                        ],
                        "descriptionList": [
                        {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                        ],
                        "subHeader": "",
                        "headerType": 0,
                        "superFreedel": ""
                        },
                        "chain": [],
                        "feeDetails": {
                        "fees": [
                        {
                        "name": "distance",
                        "fee": 2500,
                        "message": ""
                        },
                        {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                        },
                        {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                        }
                        ],
                        "totalFees": 2500,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2500",
                        "icon": ""
                        },
                        "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                        },
                        "longDistanceEnabled": 0,
                        "rainMode": "NONE",
                        "thirdPartyAddress": false,
                        "thirdPartyVendor": "",
                        "adTrackingID": "",
                        "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                        },
                        "lastMileTravelString": "0.3 kms",
                        "hasSurge": false,
                        "sla": {
                        "restaurantId": "608880",
                        "deliveryTime": 29,
                        "minDeliveryTime": 29,
                        "maxDeliveryTime": 29,
                        "lastMileTravel": 0.30000001192092896,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                        },
                        "promoted": false,
                        "avgRating": "3.4",
                        "totalRatings": 100,
                        "new": false
                        },
                        "subtype": "basic"
                        },
                        {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "259936",
                            "name": "One way restaurant",
                            "uuid": "953b96b8-31f0-4b21-8107-b2b7e80fd82b",
                            "city": "18",
                            "area": "Veer Sawarkar Market",
                            "totalRatingsString": "100+ ratings",
                            "cloudinaryImageId": "g8qifv6jfpx0whdlqbff",
                            "cuisines": [
                            "North Indian",
                            "Thalis",
                            "Fast Food",
                            "Desserts"
                            ],
                            "tags": [],
                            "costForTwo": 15000,
                            "costForTwoString": "₹150 FOR TWO",
                            "deliveryTime": 26,
                            "minDeliveryTime": 26,
                            "maxDeliveryTime": 26,
                            "slaString": "26 MINS",
                            "lastMileTravel": 0.30000001192092896,
                            "slugs": {
                            "restaurant": "one-way-restaurant-sarafa-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "Ground Floor 108 Krishnapura Veer Sawarkar Market, Indore, Madhya Pradesh - 452007",
                            "locality": "Krishnapura",
                            "parentId": 152291,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "aggregatedDiscountInfo": {
                            "header": "20% off",
                            "shortDescriptionList": [
                            {
                            "meta": "20% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "20% off up to ₹50 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "aggregatedDiscountInfoV2": {
                            "header": "20% OFF",
                            "shortDescriptionList": [
                            {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "20% off up to ₹50 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.3 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "259936",
                            "deliveryTime": 26,
                            "minDeliveryTime": 26,
                            "maxDeliveryTime": 26,
                            "lastMileTravel": 0.30000001192092896,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "3.4",
                            "totalRatings": 100,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "124300",
                            "name": "Choice Chinese Center (C3)",
                            "uuid": "5f224c89-f8d0-49dd-995b-45e5b6a67bde",
                            "city": "18",
                            "area": "Sarafa",
                            "totalRatingsString": "100+ ratings",
                            "cloudinaryImageId": "6c9c79e6a7bf0205740320a03934fc7e",
                            "cuisines": [
                            "Chinese",
                            "Snacks",
                            "Beverages"
                            ],
                            "tags": [],
                            "costForTwo": 20000,
                            "costForTwoString": "₹200 FOR TWO",
                            "deliveryTime": 20,
                            "minDeliveryTime": 20,
                            "maxDeliveryTime": 20,
                            "slaString": "20 MINS",
                            "lastMileTravel": 0.30000001192092896,
                            "slugs": {
                            "restaurant": "dadi-desi-chinese-point-sarafa-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "1 hamilton road , krishna pura chatri ke pass indore",
                            "locality": "hamilton road",
                            "parentId": 62479,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "aggregatedDiscountInfo": {
                            "header": "50% off",
                            "shortDescriptionList": [
                            {
                            "meta": "50% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "aggregatedDiscountInfoV2": {
                            "header": "50% OFF",
                            "shortDescriptionList": [
                            {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.3 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "124300",
                            "deliveryTime": 20,
                            "minDeliveryTime": 20,
                            "maxDeliveryTime": 20,
                            "lastMileTravel": 0.30000001192092896,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "3.5",
                            "totalRatings": 100,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "74959",
                            "name": "Hotel Rajhans",
                            "uuid": "4d41d7f6-bdc5-4aa3-abe5-f15110b8973b",
                            "city": "18",
                            "area": "Sarafa",
                            "totalRatingsString": "5000+ ratings",
                            "cloudinaryImageId": "fszewn7vnsi1ydlpsulu",
                            "cuisines": [
                            "Thalis",
                            "Rajasthani",
                            "Indian"
                            ],
                            "tags": [],
                            "costForTwo": 50000,
                            "costForTwoString": "₹500 FOR TWO",
                            "deliveryTime": 22,
                            "minDeliveryTime": 22,
                            "maxDeliveryTime": 22,
                            "slaString": "22 MINS",
                            "lastMileTravel": 0.800000011920929,
                            "slugs": {
                            "restaurant": "hotel-rajhans-sarafa-bazaar-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "52, Bada Sarafa, Sarafa Bazaar, Indore",
                            "locality": "Bada Sarafa",
                            "parentId": 101336,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "aggregatedDiscountInfo": {
                            "header": "FLAT100 off",
                            "shortDescriptionList": [
                            {
                            "meta": "FLAT100 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "FLAT100 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "aggregatedDiscountInfoV2": {
                            "header": "₹100 OFF",
                            "shortDescriptionList": [
                            {
                            "meta": "Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "FLAT100 off | Use FLATDEAL",
                            "discountType": "Flat",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.8 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "74959",
                            "deliveryTime": 22,
                            "minDeliveryTime": 22,
                            "maxDeliveryTime": 22,
                            "lastMileTravel": 0.800000011920929,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "4.2",
                            "totalRatings": 5000,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "69420",
                            "name": "Vijay Chaat House",
                            "uuid": "51a9e01c-2cbd-4fab-aacb-b6e7c26e7420",
                            "city": "18",
                            "area": "Rajwada",
                            "totalRatingsString": "1000+ ratings",
                            "cloudinaryImageId": "mstgatb2vu8v48kcua81",
                            "cuisines": [
                            "Snacks",
                            "Sweets",
                            "Chaat",
                            "Street Food"
                            ],
                            "tags": [],
                            "costForTwo": 15000,
                            "costForTwoString": "₹150 FOR TWO",
                            "deliveryTime": 19,
                            "minDeliveryTime": 19,
                            "maxDeliveryTime": 19,
                            "slaString": "19 MINS",
                            "lastMileTravel": 0.6000000238418579,
                            "slugs": {
                            "restaurant": "vijay-chaat-house-sarafa-bazaar-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "1, Yashoda Mata Mandir Rd, Nihalpura, Sarafa Bazar, Indore, Madhya Pradesh 452002, India",
                            "locality": "Nihalpura",
                            "parentId": 223165,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.6 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "69420",
                            "deliveryTime": 19,
                            "minDeliveryTime": 19,
                            "maxDeliveryTime": 19,
                            "lastMileTravel": 0.6000000238418579,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "4.3",
                            "totalRatings": 1000,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "90540",
                            "name": "Vijayshree Sandwich",
                            "uuid": "3a0388d9-d7a2-48c6-92d5-8358eee7fa4c",
                            "city": "18",
                            "area": "Sarafa",
                            "totalRatingsString": "1000+ ratings",
                            "cloudinaryImageId": "jvhbkdbh7mi9krqmwnyh",
                            "cuisines": [
                            "Snacks",
                            "Beverages"
                            ],
                            "tags": [],
                            "costForTwo": 20000,
                            "costForTwoString": "₹200 FOR TWO",
                            "deliveryTime": 20,
                            "minDeliveryTime": 20,
                            "maxDeliveryTime": 20,
                            "slaString": "20 MINS",
                            "lastMileTravel": 0.699999988079071,
                            "slugs": {
                            "restaurant": "vijayshree-sandwich-jail-road-south-tukoganj",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "Opposite Dollar Market, Jail Road, Indore",
                            "locality": "Jail Road",
                            "parentId": 223354,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.6 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "90540",
                            "deliveryTime": 20,
                            "minDeliveryTime": 20,
                            "maxDeliveryTime": 20,
                            "lastMileTravel": 0.699999988079071,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "4.1",
                            "totalRatings": 1000,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "197650",
                            "name": "mahadev lassi",
                            "uuid": "f48ba3a7-2e34-4d6c-9be1-56c8c4b1756f",
                            "city": "18",
                            "area": "Rajwada",
                            "totalRatingsString": "50+ ratings",
                            "cloudinaryImageId": "ftqg2cwlsy46aqzp4jzp",
                            "cuisines": [
                            "Beverages",
                            "Desserts",
                            "Snacks"
                            ],
                            "tags": [],
                            "costForTwo": 10000,
                            "costForTwoString": "₹100 FOR TWO",
                            "deliveryTime": 19,
                            "minDeliveryTime": 19,
                            "maxDeliveryTime": 19,
                            "slaString": "19 MINS",
                            "lastMileTravel": 0.6000000238418579,
                            "slugs": {
                            "restaurant": "mahadev-lassi-sarafa-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "Prince Yashwant Road, Rajwada, Indore, Madhya Pradesh, India",
                            "locality": "Prince Yashwant Road",
                            "parentId": 129544,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.6 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "197650",
                            "deliveryTime": 19,
                            "minDeliveryTime": 19,
                            "maxDeliveryTime": 19,
                            "lastMileTravel": 0.6000000238418579,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "4.6",
                            "totalRatings": 50,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "372625",
                            "name": "Jai Malhar Sandwich",
                            "uuid": "6a87b845-4e76-433a-94ca-103de8690199",
                            "city": "18",
                            "area": "Shiv Vilas Palace",
                            "totalRatingsString": "Too Few Ratings",
                            "cloudinaryImageId": "jllcmiyznmjcnwnsnvem",
                            "cuisines": [
                            "Continental",
                            "Snacks"
                            ],
                            "tags": [],
                            "costForTwo": 20000,
                            "costForTwoString": "₹200 FOR TWO",
                            "deliveryTime": 22,
                            "minDeliveryTime": 22,
                            "maxDeliveryTime": 22,
                            "slaString": "22 MINS",
                            "lastMileTravel": 0.5,
                            "slugs": {
                            "restaurant": "jai-malhar-sandwich-sarafa-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "9 SHIV VILAS PALACE SUBHASH CHOWK, INDORE\t452001",
                            "locality": "Sarafa",
                            "parentId": 108620,
                            "unserviceable": false,
                            "veg": false,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.5 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "372625",
                            "deliveryTime": 22,
                            "minDeliveryTime": 22,
                            "maxDeliveryTime": 22,
                            "lastMileTravel": 0.5,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "--",
                            "totalRatings": 0,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "65543",
                            "name": "Pizza Hut",
                            "uuid": "f25beab3-9300-4b19-9c53-75027e140068",
                            "city": "18",
                            "area": "Old Palasia",
                            "totalRatingsString": "5000+ ratings",
                            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                            "cuisines": [
                            "Pizzas"
                            ],
                            "tags": [],
                            "costForTwo": 35000,
                            "costForTwoString": "₹350 FOR TWO",
                            "deliveryTime": 34,
                            "minDeliveryTime": 34,
                            "maxDeliveryTime": 34,
                            "slaString": "34 MINS",
                            "lastMileTravel": 4.300000190734863,
                            "slugs": {
                            "restaurant": "pizza-hut-saket-square-old-palasia",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "Shop no UG 7 & 8 Rafeel Tower, Saket Square, Indore",
                            "locality": "Saket Square",
                            "parentId": 721,
                            "unserviceable": false,
                            "veg": false,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "aggregatedDiscountInfo": {
                            "header": "Free Pepsi Pet Bottle",
                            "shortDescriptionList": [
                            {
                            "meta": "Free Pepsi Pet Bottle on orders above ₹249",
                            "discountType": "Freebie",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "Free Pepsi Pet Bottle on orders above ₹249",
                            "discountType": "Freebie",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "aggregatedDiscountInfoV2": {
                            "header": "",
                            "shortDescriptionList": [
                            {
                            "meta": "Free Pepsi Pet Bottle",
                            "discountType": "Freebie",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "Free Pepsi Pet Bottle on orders above ₹249",
                            "discountType": "Freebie",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "ribbon": [
                            {
                            "type": "PROMOTED"
                            }
                            ],
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 3500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 3500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "3500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "cid=6491808~p=19~eid=00000187-9944-e5b0-278c-72bb00b1135c",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "4.3 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "65543",
                            "deliveryTime": 34,
                            "minDeliveryTime": 34,
                            "maxDeliveryTime": 34,
                            "lastMileTravel": 4.300000190734863,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": true,
                            "avgRating": "3.8",
                            "totalRatings": 5000,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "122585",
                            "name": "maharaja kachori corner",
                            "uuid": "0a52f3fa-eceb-4913-a12a-68e9b96b7ab7",
                            "city": "18",
                            "area": "Mth Compound",
                            "totalRatingsString": "1000+ ratings",
                            "cloudinaryImageId": "igrwplj13sepu899gfwz",
                            "cuisines": [
                            "Street Food",
                            "Fast Food",
                            "Snacks"
                            ],
                            "tags": [],
                            "costForTwo": 10000,
                            "costForTwoString": "₹100 FOR TWO",
                            "deliveryTime": 19,
                            "minDeliveryTime": 19,
                            "maxDeliveryTime": 19,
                            "slaString": "19 MINS",
                            "lastMileTravel": 0.699999988079071,
                            "slugs": {
                            "restaurant": "maharaja-kachori-corner-kothari-market-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "shop no. 654 kothari market",
                            "locality": "Kothari Market",
                            "parentId": 129883,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "aggregatedDiscountInfo": {
                            "header": "50% off",
                            "shortDescriptionList": [
                            {
                            "meta": "50% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "aggregatedDiscountInfoV2": {
                            "header": "50% OFF",
                            "shortDescriptionList": [
                            {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "descriptionList": [
                            {
                            "meta": "50% off up to ₹100 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                            }
                            ],
                            "subHeader": "",
                            "headerType": 0,
                            "superFreedel": ""
                            },
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.6 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "122585",
                            "deliveryTime": 19,
                            "minDeliveryTime": 19,
                            "maxDeliveryTime": 19,
                            "lastMileTravel": 0.699999988079071,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "4.2",
                            "totalRatings": 1000,
                            "new": false
                            },
                            "subtype": "basic"
                            },
                            {
                            "type": "restaurant",
                            "data": {
                            "type": "F",
                            "id": "70480",
                            "name": "shreenath fariyali khichdi",
                            "uuid": "b73f590b-3183-4fe6-91aa-87c43847bd1c",
                            "city": "18",
                            "area": "Devi Ahilya Marg",
                            "totalRatingsString": "1000+ ratings",
                            "cloudinaryImageId": "voxusgni6qixcakys7vt",
                            "cuisines": [
                            "Snacks"
                            ],
                            "tags": [],
                            "costForTwo": 10000,
                            "costForTwoString": "₹100 FOR TWO",
                            "deliveryTime": 18,
                            "minDeliveryTime": 18,
                            "maxDeliveryTime": 18,
                            "slaString": "18 MINS",
                            "lastMileTravel": 0.800000011920929,
                            "slugs": {
                            "restaurant": "shreenath-khichdi-jail-road-sarafa",
                            "city": "indore"
                            },
                            "cityState": "18",
                            "address": "43, devi ahilya marg, indore",
                            "locality": "Jail Road",
                            "parentId": 186020,
                            "unserviceable": false,
                            "veg": true,
                            "select": false,
                            "favorite": false,
                            "tradeCampaignHeaders": [],
                            "chain": [],
                            "feeDetails": {
                            "fees": [
                            {
                            "name": "distance",
                            "fee": 2500,
                            "message": ""
                            },
                            {
                            "name": "time",
                            "fee": 0,
                            "message": ""
                            },
                            {
                            "name": "special",
                            "fee": 0,
                            "message": ""
                            }
                            ],
                            "totalFees": 2500,
                            "message": "",
                            "title": "Delivery Charge",
                            "amount": "2500",
                            "icon": ""
                            },
                            "availability": {
                            "opened": true,
                            "nextOpenMessage": "",
                            "nextCloseMessage": ""
                            },
                            "longDistanceEnabled": 0,
                            "rainMode": "NONE",
                            "thirdPartyAddress": false,
                            "thirdPartyVendor": "",
                            "adTrackingID": "",
                            "badges": {
                            "imageBased": [],
                            "textBased": [],
                            "textExtendedBadges": []
                            },
                            "lastMileTravelString": "0.8 kms",
                            "hasSurge": false,
                            "sla": {
                            "restaurantId": "70480",
                            "deliveryTime": 18,
                            "minDeliveryTime": 18,
                            "maxDeliveryTime": 18,
                            "lastMileTravel": 0.800000011920929,
                            "lastMileDistance": 0,
                            "serviceability": "SERVICEABLE",
                            "rainMode": "NONE",
                            "longDistance": "NOT_LONG_DISTANCE",
                            "preferentialService": false,
                            "iconType": "EMPTY"
                            },
                            "promoted": false,
                            "avgRating": "4.3",
                            "totalRatings": 1000,
                            "new": false
                            },
                            "subtype": "basic"
                            },
];

// not using keys ( not acceptable ) <<<< index as key <<<<< unique id (best pratice)
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             {resList.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
              ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);