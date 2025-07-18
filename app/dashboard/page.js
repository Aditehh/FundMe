"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // ✅ Call all hooks unconditionally

  useEffect(() => {
    // Only redirect after session is confirmed and not loading
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  // ✅ Don’t return early before calling hooks — always let hooks initialize first
  if (!session) return null;


  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="bg-[#2c2f33] p-6 rounded-xl max-w-md mx-auto mt-10 text-white space-y-4 shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Profile Form</h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            // value={form.name}
            // onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-[#23272a] border border-gray-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            // value={form.email}
            // onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-[#23272a] border border-gray-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            name="username"
            // value={form.username}
            // onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-[#23272a] border border-gray-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Profile Picture</label>
          <input
            required
            type="file"
            name="profilePic"
            accept="image/*"
            // onChange={handleChange}
            className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 hover:file:bg-emerald-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Cover Picture</label>
          <input
            required
            type="file"
            name="coverPic"
            accept="image/*"
            // onChange={handleChange}
            className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 hover:file:bg-indigo-700"
          />
        </div>

        <div>
          <label htmlFor='esewaid' className="block mb-1 font-medium">Esewa id</label>
          <input
            // value={form.esewaid ? form.esewaid : ""} onChange={handleChange}
            type="text"
            id="esewaid"
            name="esewaid"
            placeholder="Enter your eSewa ID"
            required
            className="w-full px-3 py-2 rounded bg-[#23272a] border border-gray-600 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor='esewasecret' className="block mb-1 font-medium">Esewa MPIN</label>
          <input
            //  value={form.esewasecret ? form.esewasecret : ""} onChange={handleChange}
            type="text"
            id="esewasecret"
            name="esewasecret"
            placeholder="Enter your MPIN"
            className="w-full px-3 py-2 rounded bg-[#23272a] border border-gray-600 focus:outline-none"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold"
        >
          Submit
        </button>
      </form>
    </>

  );
}


export default Dashboard
