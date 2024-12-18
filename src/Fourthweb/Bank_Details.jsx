import React, { useEffect, useState } from "react";

function Bankdetails() {

    //    { This code is for fetching state data and select state}.........

    const [states, setstates] = useState([])
    const state_url = 'https://bank-apis.justinclicks.com/API/V1/STATE/'
    const [selectstate, setselectstate] = useState('ANDAMAN AND NICOBAR ISLAND')
    const fetching_states = () => {
        fetch(state_url)
            .then((response) => response.json())
            .then((data) => {
                setstates(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        fetching_states()
    }, [])

    //    { This code is for fetching Districts data and select Disrtict}.........

    const [districts, setdistricts] = useState([])
    const dist_url = `https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}`
    const [selectdistrict, setselectdistrict] = useState('')

    const fetching_dists = () => {
        fetch(dist_url)
            .then((response) => response.json())
            .then((data) => {
                setdistricts(data)
            })
            .catch((error) => console.error(error))
    }
    useEffect(() => {
        fetching_dists()
    }, [selectstate])


    //    { This code is for fetching Cities data and select City}.........
    const [cities, setcities] = useState([])
    const city_url = `https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectdistrict}`
    const [selectcity, setselectcity] = useState('')

    const fetching_city = () => {
        fetch(city_url)
            .then((response) => response.json())
            .then((data) => {
                setcities(data)
            })
            .catch((error) => console.error(error))
    }
    useEffect(() => {
        fetching_city()
    }, [selectdistrict])


    //    { This code is for fetching centers data and select Center}.........
    const [centers, setcenters] = useState([])
    const center_url = `https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectdistrict}/${selectcity}`
    const [selectcenter, setselectcenter] = useState('')
    const fethcing_centers = () => {
        fetch(center_url)
            .then((response) => response.json())
            .then((data) => {
                setcenters(data)
            })
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        fethcing_centers()
    }, [selectcity])


    //    { This code is for fetching Branchies data and select branch}.........

    const [branch, setbranch] = useState([])
    const branchies_url = `https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectdistrict}/${selectcity}/${selectcenter}`
    const [selectbranch, setselectbranch] = useState('')

    const fetching_branchs = () => {
        fetch(branchies_url)
            .then((response) => response.json())
            .then((data) => {
                setbranch(data)
            })
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        fetching_branchs()
    }, [selectcenter])


    // {Showing all details of Bank }............

    const details_url = `https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectdistrict}/${selectcity}/${selectcenter}/${selectbranch}`
    const [details, setdetails] = useState([])
    const handleClick = () => {
        fetch(details_url)
            .then((response) => response.json())
            .then((data) => {
                    const details_data = [{
                    bank: data.BANK || "N/A",
                    address: data.ADDRESS || "N/A",
                    bankcode: data.BANKCODE || "N/A",
                    branch: data.BRANCH || "N/A",
                    center: data.CENTER || "N/A",
                    city: data.CITY || "N/A",
                    con: data.CONTACT || "N/A",
                    dis: data.DISTRICT || "N/A",
                    ifsc: data.IFSC || "N/A",
                    imps: data.IMPS || "N/A",
                    micr: data.MICR || "N/A",
                    neft: data.NEFT || "N/A",
                    rtgs: data.RTGS || "N/A",
                    state: data.STATE || "N/A",
                    upi: data.UPI || "N/A",
                }];
                // console.log(details_data)
                setdetails(details_data)
            })
            .catch((error) => console.error(error))
    }
    return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
                    Bank Details Finder
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="selectstate" className="block text-gray-700 font-medium">
                            Select State:
                        </label>
                        <select
                            name="states"
                            className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setselectstate(e.target.value)}
                        >
                            <option value="Select">Select</option>
                            {states.map((x) => (
                                <option key={x} value={x}>{x}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="selectdistrict" className="block text-gray-700 font-medium">
                            Select District:
                        </label>
                        <select
                            name="districts"
                            className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setselectdistrict(e.target.value)}
                        >
                            <option value="Select">Select</option>
                            {districts.map((y) => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="selectcity" className="block text-gray-700 font-medium">
                            Select City:
                        </label>
                        <select
                            name="city"
                            className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setselectcity(e.target.value)}
                        >
                            <option value="Select">Select</option>
                            {cities.map((z) => (
                                <option key={z} value={z}>{z}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="selectcenter" className="block text-gray-700 font-medium">
                            Select Center:
                        </label>
                        <select
                            name="Center"
                            className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setselectcenter(e.target.value)}
                        >
                            <option value="Select">Select</option>
                            {centers.map((a) => (
                                <option key={a} value={a}>{a}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="selectbranch" className="block text-gray-700 font-medium">
                            Select Branch:
                        </label>
                        <select
                            name="Branch"
                            className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setselectbranch(e.target.value)}
                        >
                            <option value="Select">Select</option>
                            {branch.map((q) => (
                                <option key={q} value={q}>{q}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    onClick={handleClick}
                    className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    View Details
                </button>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
                    {details.length > 0 ? (
                        details.map((w, index) => (
                            <div key={index} className="space-y-2">
                                <div><strong>Bank:</strong> {w.bank}</div>
                                <div><strong>Address:</strong> {w.address}</div>
                                <div><strong>Bank Code:</strong> {w.bankcode}</div>
                                <div><strong>Branch:</strong> {w.branch}</div>
                                <div><strong>City:</strong> {w.city}</div>
                                <div><strong>Contact:</strong> {w.con}</div>
                                <div><strong>District:</strong> {w.dis}</div>
                                <div><strong>IFSC:</strong> {w.ifsc}</div>
                                <div><strong>IMPS:</strong> {w.imps}</div>
                                <div><strong>MICR:</strong> {w.micr}</div>
                                <div><strong>NEFT:</strong> {w.neft}</div>
                                <div><strong>RTGS:</strong> {w.rtgs}</div>
                                <div><strong>State:</strong> {w.state}</div>
                                <div><strong>UPI:</strong> {w.upi}</div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No details available. Please check your selections.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bankdetails;