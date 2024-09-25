import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Box, InputAdornment} from "@mui/material";
import {MdFlightLand, MdOutlineFlightTakeoff} from "react-icons/md";
import {TbArrowsExchange} from "react-icons/tb";
import {useEffect, useRef, useState} from "react";
import s_img from "../../assets/home-img/flag-img/Flag_of_Sri_Lanka.png";
import i_img from "../../assets/home-img/flag-img/Flag_of_India.png";
import sp_img from "../../assets/home-img/flag-img/Flag_of_Singapore.png";
import uk_img from "../../assets/home-img/flag-img/Flag_of_United_Kingdom.png";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

const FlightOnWay = () => {
    let lastcountryTitle = ''; // To track the last displayed category title
    const [originValue, setOriginValue] = useState(null);
    const [destinationValue, setDestinationValue] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const categories = [
        {
            title: 'Sri Lanka',
            img: s_img,
            options: [
                {label: 'Colombo', description: 'Bandaranaike Intl Arpt', flight: "CMB"},
                {label: 'Jaffna', description: 'Jaffna Intl Arpt', flight: "JAF"},
            ],
        },
        {
            title: 'India',
            img: i_img,
            options: [
                {label: 'Delhi', description: 'Delhi Indira Gandhi Intl', flight: "DEL"},
                {label: 'Chennai', description: 'Chennai Arpt', flight: "MAA"},
            ],
        },
        {
            title: 'Singapore',
            img: sp_img,
            options: [
                {label: 'Singapore', description: 'Changi Intl Arpt', flight: "SIN"},
            ],
        },
        {
            title: 'UK',
            img: uk_img,
            options: [
                {label: 'London', description: 'London, UK - All Airports (LON)', flight: "LON"},
            ],
        },
    ];

    // Flatten the categories array to get options for Autocomplete
    const options = categories.flatMap(category =>
        category.options.map(option => ({
            ...option,
            countryTitle: category.title, // Add category title for rendering
            flagImg: category.img, // Add category title for rendering
        }))
    );

    // Automatically select the first option if options are available
    useEffect(() => {
        if (options.length > 0 && !originValue) {
            setOriginValue(options[0]); // Set the first option as selected
        }
    }, [options, originValue]);


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleDropdownToggle = () => {
        setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
    };

    const handleOptionSelect = (city) => {
        setInputValue(city); // Update input value with selected city
        setDropdownVisible(false); // Close dropdown
    };


    return (
        <div className="flex lg:flex-row flex-col gap-4 justify-center md:px-0 px-5 max-w-7xl">
            <div className="flex flex-row gap-2 justify-center">
                <div>
                    <span>Origin</span>
                    <Autocomplete
                        options={options}
                        value={originValue} // Link the state here
                        getOptionLabel={(option) => `${option.countryTitle}, ${option.label} (${option.flight})`}
                        onChange={(event, newValue) => {
                            setOriginValue(newValue); // Update the selected option state
                        }}
                        renderOption={(props, option, {index}) => {
                            // Only render the category title if it's different from the last one
                            const shouldRendercountryTitle = option.countryTitle !== lastcountryTitle;

                            // Update lastcountryTitle
                            if (shouldRendercountryTitle) {
                                lastcountryTitle = option.countryTitle;
                            }

                            return (
                                <div {...props} className="flex flex-col w-full">
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
                                    style: {height: '40px', lineHeight: '5px', paddingRight: '10px', color: '#888888'},
                                }}
                            />
                        )}
                        ListboxComponent={(props) => (
                            <div className="pt-2">

                            <span
                                className="font-bold text-left w-full text-gray-700 text-[16px] px-2">TOP CITIES</span>

                                <Box {...props} />
                            </div>
                        )}
                    />
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
                        }}
                        renderOption={(props, option, {index}) => {
                            // Only render the category title if it's different from the last one
                            const shouldRendercountryTitle = option.countryTitle !== lastcountryTitle;

                            // Update lastcountryTitle
                            if (shouldRendercountryTitle) {
                                lastcountryTitle = option.countryTitle;
                            }

                            return (
                                <div {...props} className="flex flex-col w-full">
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
                                    <MdFlightLand style={{fontSize: '24px'}}/> {/* Adjust icon size here */}
                                </span>
                                        </InputAdornment>
                                    ),
                                    endAdornment: null, // Remove the down arrow and close icon
                                    style: {height: '40px', lineHeight: '5px', paddingRight: '10px', color: '#888888'},
                                }}
                            />
                        )}
                        ListboxComponent={(props) => (
                            <div className="pt-2">

                            <span
                                className="font-bold text-left w-full text-gray-700 text-[16px] px-2">TOP CITIES</span>

                                <Box {...props} />
                            </div>
                        )}
                    />


                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                    <div className="flex flex-col">
                        <span>Depart</span>
                        <div className="mt-[-6px]">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
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
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span>Return</span>
                        <div className="mt-[-6px]">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
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
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span>Depart</span>
                    <div className="mt-[-2px]">
                    <TextField
                        value={inputValue}
                        onChange={handleInputChange}
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
                            style: {height: '40px', lineHeight: '5px', paddingRight: '10px', color: '#888888'},
                        }}
                        onClick={handleDropdownToggle} // Show dropdown on click
                    />
                    </div>
                    {dropdownVisible && (
                        <div className="absolute bg-white ml-[-1.4rem] z-10 mt-[11.7rem] w-[14.76rem] rounded-md shadow-xl">
                            <span
                                className="font-bold text-left w-full text-black text-[16px] px-2">TOP CITIES</span>
                            <ul className="text-black">
                                {/* Replace the options below with your actual city options */}
                                <li onClick={() => handleOptionSelect('New York')}
                                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer">New York
                                </li>
                                <li onClick={() => handleOptionSelect('Los Angeles')}
                                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Los Angeles
                                </li>
                                <li onClick={() => handleOptionSelect('Chicago')}
                                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Chicago
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>
    )
}

export default FlightOnWay;