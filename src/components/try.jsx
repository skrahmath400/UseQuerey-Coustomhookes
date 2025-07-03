import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function  Examples() {
  // Initialize state for checkboxes and form submission
  const [data, setData] = useState({
    reading: false,
    traveling: false,
    submitted: false,
  });

  // Handle checkbox changes
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setData({ ...data, [name]: checked });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, submitted: true });
    console.log('Submitted data:', { reading: data.reading, traveling: data.traveling });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left column: Checkboxes */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Hobbies</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="reading"
                  name="reading"
                  checked={data.reading}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="reading">
                  Reading
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="traveling"
                  name="traveling"
                  checked={data.traveling}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="traveling">
                  Traveling
                </label>
              </div>
            </div>
          </div>
          {/* Right column: Empty for now, can add other inputs */}
          <div className="col-md-6">
            {/* Placeholder for additional fields */}
          </div>
        </div>

        {/* Submit button spanning full width */}
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>

        {/* Display submitted data */}
        {data.submitted && (
          <div className="mt-3 alert alert-info">
            <h5>Submitted Hobbies:</h5>
            <ul>
              {data.reading && <li>Reading</li>}
              {data.traveling && <li>Traveling</li>}
              {!data.reading && !data.traveling && <li>No hobbies selected</li>}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default Examples;