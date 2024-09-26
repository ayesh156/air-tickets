import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Box, Button, InputAdornment} from "@mui/material";
import {MdFlightLand, MdOutlineFlightTakeoff} from "react-icons/md";
import {TbArrowsExchange} from "react-icons/tb";
import React, {useState} from "react";
import {FaPlus, FaMinus} from "react-icons/fa6";
import {travellersCategoryArray, travellersClass, citiesItem} from "../constants/index.jsx"
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {FieldArray, Formik} from "formik";
import * as yup from "yup";
import {ImSearch} from "react-icons/im";
import {IoMdClose} from "react-icons/io";

const userSchema = yup.object().shape({
    multiCity: yup.array().of(
        yup.object().shape({
            origin: yup.string().required("Please Enter Origin"),
            destination: yup.string().required("Please Enter Destination"),
            date: yup.string().required("Please Enter Departure Date"),
        })
    )
});

const FlightMultiCity = () => {
    let lastcountryTitle = ''; // To track the last displayed category title
    // Autocomplete sample data
    const [selectedClass, setSelectedClass] = useState("Economy");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [travellersCategory, setTravellersCategory] = useState(travellersCategoryArray);

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

    return (

        <Formik
            initialValues={{multiCity: [{origin: "", destination: "", date: null}]}}
            onSubmit={(values) => {
                const logArray = [
                    values,
                    {name: "totalCount", value: calculateTotalCount()},
                    {name: "selectedClass", value: selectedClass}
                ];
                console.log(logArray);
            }}
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
                    <FieldArray
                        name="multiCity"
                        render={(arrayHelpers) => (
                            <div className="flex flex-col">

                                {values.multiCity.map((input, index) => (
                                    <div className="flex lg:flex-row flex-col items-start gap-4 md:px-0 px-5 max-w-7xl">
                                        <div key={index} className="mb-2 flex items-center space-x-2">
                                            <div>
                                                <span>Origin</span>
                                                {/* Autocomplete 1 */}
                                                <Autocomplete
                                                    options={options}
                                                    getOptionLabel={(option) => `${option.countryTitle}, ${option.label} (${option.flight})` || ""}
                                                    value={options.find(option => option.label === input.origin) || null} // Find the selected option by label
                                                    onChange={(event, newValue) => {
                                                        setFieldValue(`multiCity.${index}.origin`, newValue ? newValue.label : ''); // Use the label or empty string
                                                        setFieldTouched(`multiCity.${index}.origin`, false); // Set to
                                                    }}
                                                    renderOption={(props, option, {index}) => {
                                                        // Only render the category title if it's different from the last one
                                                        const shouldRendercountryTitle = option.countryTitle !== lastcountryTitle;

                                                        // Update lastcountryTitle
                                                        if (shouldRendercountryTitle) {
                                                            lastcountryTitle = option.countryTitle;
                                                        }

                                                        return (
                                                            <div {...props} className="flex flex-col w-full"
                                                                 key={index}>
                                                                {/* Render category title only if needed */}
                                                                {shouldRendercountryTitle && (
                                                                    <div
                                                                        className={`flex justify-between w-full border-b px-2 ${index === 0 ? 'pt-0' : 'pt-2'}`}>
                                        <span
                                            className="font-bold text-left w-full text-[12px] uppercase">{option.countryTitle}</span>
                                                                        <img src={option.flagImg}
                                                                             alt={option.flagImg}
                                                                             className="h-3"/>
                                                                    </div>
                                                                )}
                                                                {/* Render option details */}
                                                                <div
                                                                    className="flex hover:bg-[#C3E2F1] flex-row justify-between w-full px-2 cursor-pointer">
                                                                    <div>
                                                                        <h4>{option.label}</h4>
                                                                        <span
                                                                            className="text-[13px]">{option.description}</span>
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
                                                {touched.multiCity?.[index]?.origin && errors.multiCity?.[index]?.origin && (
                                                    <div
                                                        className="absolute left-30 w-28 bg-[#FF6360] text-white mt-2 p-1 rounded-sm z-30">
                                                        <div className="relative">
                                                            <div
                                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                                            <span
                                                                className="text-[12px] font-medium">{errors.multiCity[index].origin}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <TbArrowsExchange className="text-gray-300 text-2xl"/>
                                            </div>
                                            <div>
                                                <span>Destination</span>
                                                {/* Autocomplete 1 */}
                                                <Autocomplete
                                                    options={options}
                                                    getOptionLabel={(option) => `${option.countryTitle}, ${option.label} (${option.flight})` || ""}
                                                    value={options.find(option => option.label === input.destination) || null} // Find the selected option by label
                                                    onChange={(event, newValue) => {
                                                        setFieldValue(`multiCity.${index}.destination`, newValue ? newValue.label : ''); // Use the label or empty string
                                                        setFieldTouched(`multiCity.${index}.destination`, false); // Set to
                                                    }}
                                                    renderOption={(props, option, {index}) => {
                                                        // Only render the category title if it's different from the last one
                                                        const shouldRendercountryTitle = option.countryTitle !== lastcountryTitle;

                                                        // Update lastcountryTitle
                                                        if (shouldRendercountryTitle) {
                                                            lastcountryTitle = option.countryTitle;
                                                        }

                                                        return (
                                                            <div {...props} className="flex flex-col w-full"
                                                                 key={index}>
                                                                {/* Render category title only if needed */}
                                                                {shouldRendercountryTitle && (
                                                                    <div
                                                                        className={`flex justify-between w-full border-b px-2 ${index === 0 ? 'pt-0' : 'pt-2'}`}>
                                        <span
                                            className="font-bold text-left w-full text-[12px] uppercase">{option.countryTitle}</span>
                                                                        <img src={option.flagImg}
                                                                             alt={option.flagImg}
                                                                             className="h-3"/>
                                                                    </div>
                                                                )}
                                                                {/* Render option details */}
                                                                <div
                                                                    className="flex hover:bg-[#C3E2F1] flex-row justify-between w-full px-2 cursor-pointer">
                                                                    <div>
                                                                        <h4>{option.label}</h4>
                                                                        <span
                                                                            className="text-[13px]">{option.description}</span>
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
                                                {touched.multiCity?.[index]?.destination && errors.multiCity?.[index]?.destination && (
                                                    <div
                                                        className="absolute left-30 w-36 bg-[#FF6360] text-white mt-2 p-1 rounded-sm z-30">
                                                        <div className="relative">
                                                            <div
                                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                                            <span
                                                                className="text-[12px] font-medium">{errors.multiCity[index].destination}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                        <div
                                            className="flex flex-col sm:flex-row justify-center items-center gap-1 md:w-auto w-full">
                                            <div
                                                className="flex flex-col sm:flex-row justify-center items-center gap-1">
                                                <div className="flex flex-col">
                                                    <span>Depart</span>
                                                    <div className="mt-[-6px] relative">
                                                        {/* Date Picker */}
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DemoContainer components={['DateRangePicker']}>
                                                                <DatePicker
                                                                    value={input.date}
                                                                    onChange={(newDate) => {
                                                                        setFieldValue(`multiCity.${index}.date`, newDate);
                                                                        setFieldTouched(`multiCity.${index}.date`, true); // Mark the field as touched to hide error
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
                                                                    renderInput={(params) => (
                                                                        <TextField {...params} variant="outlined"
                                                                                   size="small"/>
                                                                    )}
                                                                />
                                                                {/* Helper text with arrow */}
                                                                {touched.multiCity?.[index]?.date && errors.multiCity?.[index]?.date && (
                                                                    <div
                                                                        className="absolute left-30 w-[10.2rem] top-[2.1rem] bg-[#FF6360] text-white mt-2 p-1 rounded-sm z-30">
                                                                        <div className="relative">
                                                                            <div
                                                                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#FF6360]"></div>
                                                                            <span
                                                                                className="text-[12px] font-medium">{errors.multiCity[index].date}</span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </DemoContainer>
                                                        </LocalizationProvider>
                                                    </div>
                                                </div>
                                                {index === 0 && (
                                                    <div>
                                                        <div className="flex flex-col">
                                                            <span>Destination</span>
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
                                                                className="absolute py-2 bg-white ml-[-1.4rem] w-[14.76rem] rounded-md shadow-xl px-3 z-30"
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
                                                                    <button
                                                                        className="bg-[#7D7D7D] px-3 py-1 rounded-sm"
                                                                        onClick={() => setDropdownVisible(false)}>Done
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                        {index !== 0 && (
                                            <button
                                                className="mt-8 text-gray-300"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >
                                                <IoMdClose className="text-2xl"/>
                                            </button>
                                        )}

                                        {/* Delete Button */}


                                    </div>

                                ))}
                                <div>
                                    <button
                                        className="mt-4 px-2 py-2 w-36 bg-black text-white rounded hover:bg-blue-700"
                                        onClick={() => {
                                            if (values.multiCity.length < 5) { // Check before pushing
                                                arrayHelpers.push({
                                                    origin: "",
                                                    destination: "",
                                                    date: null
                                                });
                                            }
                                        }}
                                    >
                                        Add city
                                        <span className="text-[12px] ml-2">(Up to 5)</span>

                                    </button>
                                    <hr className="border-0 bg-transparent h-[1px] -mt-5"
                                        style={{backgroundColor: '#7f8c8d'}}/>
                                </div>


                            </div>
                        )}
                    />

                    {/* Submit button */}
                    <div className="flex justify-center sm:justify-end mt-11">
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

    );
}

export default FlightMultiCity;