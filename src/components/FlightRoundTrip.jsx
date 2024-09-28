import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Box, InputAdornment} from "@mui/material";
import {MdFlightLand, MdOutlineFlightTakeoff} from "react-icons/md";
import {TbArrowsExchange} from "react-icons/tb";
import React, { useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa6";
import {travellersCategoryArray, travellersClass, citiesItem} from "../constants/index.jsx"
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Formik} from "formik";
import * as yup from "yup";
import {ImSearch} from "react-icons/im";
import dayjs from "dayjs";

const userSchema = yup.object().shape({
    origin: yup.string().required("Please Enter Origin"),
    destination: yup.string().required("Please Enter Destination"),
    depart: yup.string().required("Please Enter Departure Date"),
    return: yup.string().required("Please Enter Return Date"),

});

const FlightRoundTrip = () => {
    let lastcountryTitle = ''; // To track the last displayed category title
    // const [originValue, setOriginValue] = useState(null);
    const [destinationValue, setDestinationValue] = useState(null);
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [selectedClass, setSelectedClass] = useState("Economy");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [travellersCategory, setTravellersCategory] = useState(travellersCategoryArray);

    // Flatten the citiesItem array to get options for Autocomplete
    const options = citiesItem.flatMap(category =>
        category.options.map(option => ({
            ...option,
            countryTitle: category.title, // Add category title for rendering
            flagImg: category.img, // Add category title for rendering
        }))
    );


    const handleDropdownToggle = () => {
        setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
    };

    // Function to calculate total count
    const calculateTotalCount = () => {
        return travellersCategory.reduce((total, item) => total + item.count, 0);
    };

    // Function to handle minus click
    const handleMinus = (index) => {
        setTravellersCategory(prevCategories =>
            prevCategories.map((item, i) => {
                if (i === index && item.count > 0) {
                    return {...item, count: item.count - 1};
                }
                return item;
            })
        );
    };

    // Function to handle plus click with max limit of 9 for total count
    const handlePlus = (index) => {
        if (calculateTotalCount() < 9) {
            setTravellersCategory(prevCategories =>
                prevCategories.map((item, i) => {
                    if (i === index) {
                        return {...item, count: item.count + 1};
                    }
                    return item;
                })
            );
        }
    };

    const travelButtonClick = (travelClass) => {
        setSelectedClass(travelClass); // Set the clicked travel class
        // Optionally, you can set the textFieldValue based on the class if needed
    };

    const initialValues = {
        origin: "",
        destination: "",
        depart: "",
        return: "",
    };

    const [originValue, setOriginValue] = useState(null); // State for Autocomplete


    const topicBoxComponent = React.forwardRef(function ListboxComponent(
        props,
        ref
    ) {

        return (
            <div className="pt-2" ref={ref}>
                <span className="font-bold text-left w-full text-gray-700 text-[16px] px-2">TOP CITIES</span>
                <Box {...props} />
            </div>
        );
    });


    const handleSubmit2 = (values, {resetForm}) => {
        // Log form values and selections for debugging
        console.log("Origin :", originValue);
        console.log("Destination :", destinationValue);
        console.log("Depart Date :", dayjs(departDate).format('YYYY-MM-DD'));
        console.log("Return Date :", dayjs(returnDate).format('YYYY-MM-DD'));
        console.log(calculateTotalCount(), " Traveller(s)");
        console.log(selectedClass, " Class")
    }

    return (
        <Formik
            // Handling form submission with validation
            onSubmit={handleSubmit2}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched,
                  isValid,
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex lg:flex-row flex-col gap-4 justify-center md:px-0 px-5 max-w-7xl">
                        {/* Form fields for Origin and Destination */}
                        <div className="flex flex-row gap-2 justify-center">
                            <div>
                                <span>Origin</span>
                                <Autocomplete
                                    options={options}
                                    value={originValue} // Link the state here
                                    getOptionLabel={(option) => `${option.countryTitle}, ${option.label} (${option.flight})`}
                                    onChange={(event, newValue) => {
                                        setOriginValue(newValue); // Update the selected option state
                                        setFieldValue('origin', newValue ? newValue.label : ''); // Set the Formik value
                                        setFieldTouched('origin', false); // Set touched to true on
                                    }}
                                    renderOption={(props, option, {index}) => {
                                        // Only render the category title if it's different from the last one
                                        const shouldRendercountryTitle = option.countryTitle !== lastcountryTitle;

                                        // Update lastcountryTitle
                                        if (shouldRendercountryTitle) {
                                            lastcountryTitle = option.countryTitle;
                                        }

                                        return (
                                            <div {...props} className="flex flex-col w-full" key={index}>
                                                {/* Render category title only if needed */}
                                                {shouldRendercountryTitle && (
                                                    <div
                                                        className={`flex justify-between w-full border-b px-2 ${index === 0 ? 'pt-0' : 'pt-2'}`}>
                                        <span
                                            className="font-bold text-left w-full text-[12px] uppercase">{option.countryTitle}</span>
                                                        <img src={option.flagImg} alt={option.flagImg} className="h-3"/>
                                                    </div>
                                                )}
                                                {/* Render option details */}
                                                <div
                                                    className="flex hover:bg-[#C3E2F1] flex-row justify-between w-full px-2 cursor-pointer">
                                                    <div>
                                                        <h4>{option.label}</h4>
                                                        <span className="text-[13px]">{option.description}</span>
                                                    </div>
                                                    <div>
                                                        {option.flight}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder="Type any city or airport"
                                            className="rounded-[0.3rem]"
                                            error={touched.origin && Boolean(errors.origin)} // Show error if touched and has an error
                                            style={{
                                                width: window.innerWidth < 600 ? '150px' : window.innerWidth < 1200 ? '200px' : '258px', // Adjust width based on screen size
                                                backgroundColor: 'white',
                                                marginTop: '2px',
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                            <span style={{display: 'flex', alignItems: 'center', height: '40px'}}>
                                    <MdOutlineFlightTakeoff style={{fontSize: '24px'}}/> {/* Adjust icon size here */}
                                </span>
                                                    </InputAdornment>
                                                ),
                                                endAdornment: null, // Remove the down arrow and close icon
                                                style: {
                                                    height: '40px',
                                                    lineHeight: '5px',
                                                    paddingRight: '10px',
                                                    color: '#888888'
                                                },
                                            }}
                                        />
                                    )}
                                    ListboxComponent={topicBoxComponent}
                                />
                                {/* Helper text with arrow */}
                                {touched.origin && errors.origin && (
                                    <div className="absolute left-30 w-28 bg-[#FF6360] text-white mt-2 p-1 rounded-sm">
                                        <div className="relative">
                                            <div
                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                            <span className="text-[12px] font-medium">{errors.origin}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center mt-5">
                                <TbArrowsExchange className="text-gray-300 text-2xl"/>
                            </div>
                            <div>
                                <span>Destination</span>
                                <Autocomplete
                                    options={options}
                                    value={destinationValue} // L
                                    getOptionLabel={(option) => `${option.countryTitle}, ${option.label} (${option.flight})`}
                                    onChange={(event, newValue) => {
                                        setDestinationValue(newValue); // Update the selected option state
                                        setFieldValue('destination', newValue ? newValue.label : ''); // Set the Formik value
                                        setFieldTouched('destination', false); // Set touched to true on selection

                                    }}
                                    renderOption={(props, option, {index}) => {
                                        // Only render the category title if it's different from the last one
                                        const shouldRendercountryTitle = option.countryTitle !== lastcountryTitle;

                                        // Update lastcountryTitle
                                        if (shouldRendercountryTitle) {
                                            lastcountryTitle = option.countryTitle;
                                        }

                                        return (
                                            <div {...props} className="flex flex-col w-full" key={index}>
                                                {/* Render category title only if needed */}
                                                {shouldRendercountryTitle && (
                                                    <div
                                                        className={`flex justify-between w-full border-b px-2 ${index === 0 ? 'pt-0' : 'pt-2'}`}>
                                        <span
                                            className="font-bold text-left w-full text-[12px] uppercase">{option.countryTitle}</span>
                                                        <img src={option.flagImg} alt={option.flagImg} className="h-3"/>
                                                    </div>
                                                )}
                                                {/* Render option details */}
                                                <div
                                                    className="flex hover:bg-[#C3E2F1] flex-row justify-between w-full px-2 cursor-pointer">
                                                    <div>
                                                        <h4>{option.label}</h4>
                                                        <span className="text-[13px]">{option.description}</span>
                                                    </div>
                                                    <div>
                                                        {option.flight}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder="Type any city or airport"
                                            className="rounded-[0.3rem]"
                                            // Show error if the destination field has been touched and has an error
                                            error={touched.destination && Boolean(errors.destination)} // Show error if touched and
                                            style={{
                                                // Adjust width based on screen size
                                                width: window.innerWidth < 600 ? '150px' : window.innerWidth < 1200 ? '200px' : '258px', // Adjust width based on screen size
                                                backgroundColor: 'white',
                                                marginTop: '2px',
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                            <span style={{display: 'flex', alignItems: 'center', height: '40px'}}>
                                    <MdFlightLand style={{fontSize: '24px'}}/> {/* Adjust icon size here */}
                                </span>
                                                    </InputAdornment>
                                                ),
                                                endAdornment: null, // Remove the down arrow and close icon
                                                style: {
                                                    height: '40px',
                                                    lineHeight: '5px',
                                                    paddingRight: '10px',
                                                    color: '#888888'
                                                },
                                            }}
                                        />
                                    )}
                                    ListboxComponent={topicBoxComponent}
                                />
                                {/* Helper text with arrow */}
                                {touched.destination && errors.destination && (
                                    <div className="absolute left-30 w-36 bg-[#FF6360] text-white mt-2 p-1 rounded-sm">
                                        <div className="relative">
                                            <div
                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                            <span className="text-[12px] font-medium">{errors.destination}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                            {/* Departure and Return Date Picker */}
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                                {/* Departure Date Picker */}
                                <div className="flex flex-col lg:mt-0 mt-5 sm:mt-9">
                                    <span>Depart</span>
                                    <div className="mt-[-6px] relative">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateRangePicker']}>
                                                <DatePicker
                                                    selected={departDate}
                                                    onChange={(date) => {
                                                        setDepartDate(date);
                                                        // Assuming you have Formik's methods available in your scope
                                                        setFieldValue('depart', date); // Update Formik value
                                                        setFieldTouched('depart', false); // Mark the field as touched to hide error
                                                    }}
                                                    className="bg-white rounded-[0.3rem]"
                                                    format="YYYY-MM-DD"

                                                    sx={{
                                                        width: '184px',
                                                        '& .MuiInputBase-root': {
                                                            height: '40px', // Adjust height here
                                                            overflow: 'hidden',
                                                        },
                                                        '& .MuiInputBase-input': {
                                                            padding: '10px', // Adjust padding if needed
                                                        },
                                                    }}

                                                />
                                                {/* Error message for departure date */}
                                                {touched.depart && errors.depart && (
                                                    <div
                                                        className="absolute left-30 w-[10.2rem] top-[2.1rem] bg-[#FF6360] text-white mt-2 p-1 rounded-sm z-30">
                                                        <div className="relative">
                                                            <div
                                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                                            <span
                                                                className="text-[12px] font-medium">{errors.depart}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                {/* Return Date Picker */}
                                <div className="flex flex-col lg:mt-0 mt-9">
                                    <span>Return</span>
                                    <div className="mt-[-6px] relative">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateRangePicker']}>
                                                <DatePicker
                                                    selected={returnDate}
                                                    onChange={(date) => {
                                                        setReturnDate(date);
                                                        // Assuming you have Formik's methods available in your scope
                                                        setFieldValue('return', date); // Update Formik value
                                                        setFieldTouched('return', false); // Mark the field as touched to hide error
                                                    }}
                                                    className="bg-white rounded-[0.3rem]"
                                                    format="YYYY-MM-DD"
                                                    sx={{
                                                        width: '184px',
                                                        '& .MuiInputBase-root': {
                                                            height: '40px', // Adjust height here
                                                            overflow: 'hidden',
                                                        },
                                                        '& .MuiInputBase-input': {
                                                            padding: '10px', // Adjust padding if needed
                                                        },
                                                    }}
                                                />
                                                {/* Error message for return date */}
                                                {touched.return && errors.return && (
                                                    <div
                                                        className="absolute left-30 w-36 top-[2.1rem] bg-[#FF6360] text-white mt-2 p-1 rounded-sm z-30">
                                                        <div className="relative">
                                                            <div
                                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                                            <span
                                                                className="text-[12px] font-medium">{errors.return}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>

                            {/* Travellers Section */}
                            <div className="flex flex-col justify-center gap-1 lg:mt-0 mt-9">
                                <span>Travellers</span>
                                <div className="mt-[-2px]">
                                    <TextField
                                        value={`${calculateTotalCount()} Traveller(s), ${selectedClass}`} // Dynamically calculate total travelers
                                        variant="outlined"
                                        placeholder="Type any city or airport"
                                        className="rounded-[0.3rem]"
                                        style={{
                                            width: window.innerWidth < 600 ? '150px' : window.innerWidth < 1200 ? '200px' : '185px',
                                            backgroundColor: "white",
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                    <span style={{display: 'flex', alignItems: 'center', height: '40px'}}>
                                        <MdFlightLand style={{fontSize: '24px'}}/>
                                    </span>
                                                </InputAdornment>
                                            ),
                                            style: {
                                                height: '40px',
                                                lineHeight: '5px',
                                                paddingRight: '10px',
                                                color: '#888888'
                                            },
                                        }}
                                        onClick={handleDropdownToggle} // Show dropdown on click
                                    />
                                </div>

                                {/* Dropdown with travelers count */}
                                {dropdownVisible && (
                                    <div
                                        className="absolute py-2 bg-white ml-[-1.4rem] mt-[29.5rem] w-[14.76rem] rounded-md shadow-xl px-3 z-30"
                                        style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'}}>
                                        <ul>
                                            {travellersCategory.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="py-3 flex flex-row items-center border-b-2 border-b-gray-100 justify-between">
                                                    <div>
                                                        <span
                                                            className="text-[#7B7B7B] font-semibold">{item.label}</span>
                                                        {item.age && (
                                                            <span
                                                                className="text-gray-400 text-[12px] pl-1 font-medium">{item.age}</span>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-row items-center">
                                                        <button
                                                            className="border-2 w-6 h-6 flex overflow-hidden justify-center items-center border-gray-400 rounded-2xl"
                                                            onClick={() => handleMinus(index)}
                                                        >
                                                            <FaMinus
                                                                className="text-gray-400 shadow-none active:shadow-[rgba(0,0,0,0.1)_0px_-12px_12px_6px] active:rounded-2xl"/>
                                                        </button>
                                                        <span
                                                            className="text-[#777777] text-xl px-2 font-semibold">{item.count}</span>
                                                        <button
                                                            className="border-2 w-6 h-6 flex overflow-hidden justify-center items-center border-gray-400 rounded-2xl"
                                                            onClick={() => handlePlus(index)}
                                                        >
                                                            <FaPlus
                                                                className="text-gray-400 shadow-none active:shadow-[rgba(0,0,0,0.1)_0px_-12px_12px_6px] active:rounded-2xl"/>
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            <li className="py-3 flex text-gray-500 items-center justify-between flex-col">
                                                {travellersClass.map((travelClass, index) => (
                                                    <button
                                                        key={travelClass}
                                                        onClick={() => travelButtonClick(travelClass)}
                                                        className={`border ${index === travellersClass.length - 1 ? 'mb-0' : 'mb-2'} pb-[7px] pt-[6px] w-full ${
                                                            selectedClass === travelClass ? "bg-[#3B3B3B] text-white" : "border-[#3B3B3B]"
                                                        }`}
                                                    >
                                                        {travelClass}
                                                    </button>
                                                ))}
                                            </li>
                                        </ul>
                                        <div
                                            className="flex flex-row justify-end gap-1 text-white text-[12px] font-medium">
                                            <button className="bg-[#7D7D7D] px-3 py-1 rounded-sm"
                                                    onClick={() => setDropdownVisible(false)}>Done
                                            </button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center sm:justify-end mt-4">
                        <button
                            type="submit"
                            className="flex flex-row items-center gap-3 bg-[#FB4F0F] text-white rounded-sm px-3 py-[7px] text-md font-semibold shadow-lg">
                            <ImSearch className="text-[#FFA98A] text-xl"/>
                            Search Flight
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default FlightRoundTrip;