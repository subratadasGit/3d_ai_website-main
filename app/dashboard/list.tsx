"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Importing Link for navigation

const Blocklist = () => {
    const [blocklistData, setBlocklistData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlocklistData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/blocklist', {
                    headers: {
                        'Authorization': 'Bearer YOUR_TOKEN_HERE', // Replace with secure token
                    },
                });
                setBlocklistData(response.data);
            } catch (err) {
                setError('Failed to load blocklist data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlocklistData();
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navbar */}
            <nav className="bg-purple-800 bg-opacity-20 backdrop-blur-md shadow-lg w-full fixed top-0 z-10 border-b border-purple-500 border-opacity-40">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-start items-center">
                    <a className="text-purple-400 text-xl font-bold flex items-center">
                        <i className="fas fa-user-slash mr-2" aria-hidden="true"></i>
                        Blocklist
                    </a>
                </div>
            </nav>

            {/* Sidebar */}
            <div className="flex">
                <div className="w-64 bg-purple-800 bg-opacity-20 backdrop-blur-md shadow-lg h-screen fixed top-0 pt-20 border-r border-purple-500 border-opacity-40">
                    <h4 className="text-purple-400 text-xl font-bold p-4">Menu</h4>
                    <ul className="space-y-4 px-4">
                        <li>
                            <Link href="/list">
                                <a className="hover:bg-purple-700 p-2 block rounded">Student List</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/add">
                                <a className="hover:bg-purple-700 p-2 block rounded">Add Transcript</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blocklist">
                                <a className="bg-purple-700 p-2 block rounded">Blocklist</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-grow ml-64 pt-24 px-6">
                    <h2 className="text-3xl font-bold mb-6">Blocklist</h2>

                    <div className="bg-gray-900 p-6 rounded-lg shadow-md table-container">
                        {loading ? (
                            <p className="text-center text-gray-400">Loading...</p>
                        ) : error ? (
                            <p className="text-center text-red-500">{error}</p>
                        ) : (
                            <table className="w-full table-auto text-left">
                                <thead className="bg-purple-700">
                                    <tr>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Reason</th>
                                        <th className="p-4">Date Blocked</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-800">
                                    {blocklistData.length === 0 ? (
                                        <tr>
                                            <td colSpan="3" className="p-4 text-center text-gray-400">No persons are blocklisted.</td>
                                        </tr>
                                    ) : (
                                        blocklistData.map((person, index) => (
                                            <tr key={index} className="border-b border-gray-700">
                                                <td className="p-4">{person.name}</td>
                                                <td className="p-4">{person.reason}</td>
                                                <td className="p-4">{person.date_blocked}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blocklist;
