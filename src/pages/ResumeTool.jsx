import React from "react";
import TopBar from "../component/TopBar";
import { useState } from "react";

const ResumeTool = () => {
  const [file, setFile] = useState(null);
  const [loading, setloading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type == "application/pdf") {
      setFile(file);
      setSuggestions([]);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleCheck = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    setloading(true);
    setTimeout(() => {
      setSuggestions([
        "Add more measurable achievements.",
        "Use strong action verbs.",
        "Include relevant technical skills.",
        "Keep it to 1 page if possible.",
      ]);
      setloading(false);
    }, 2000);
  };
  return (
    <div>
      <TopBar />
      <div className="flex flex-row pt-30">
        <div className="w-screen h-screen flex flex-col items-center">
          <div className="flex flex-row items-center justify-between w-full px-20 max-sm:px-5">
            <h2 className="text-2xl font-bold">Resume Enhancer</h2>
            <a
              href="/dashboard"
              className="btn btn-outline btn-sm rounded-full px-4 text-sm"
            >
              Back
            </a>
          </div>
          <div className="w-screen h-screen flex flex-col items-center p-15 border-slate-400 justify-center mt-10">
            <p className="text-lg mb-5 w-100 text-center">
              Upload your resume here and we will find what could be changed and
              enchanced in it.
            </p>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFile}
              className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-4"
            />
            <button
              onClick={handleCheck}
              className={loading ? "btn" : "btn btn-primary"}
              disabled={!file || loading}
            >
              {loading ? "Checking..." : "Enhance Resume"}
            </button>
            {suggestions.length > 0 && (
              <div className="mt-10 ">
                <h3 className="font-semibold mb-2">Suggestions: </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTool;
