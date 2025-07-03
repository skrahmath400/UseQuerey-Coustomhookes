import React, { useState } from 'react';

// Replace with your background image path
const backgroundImage = 'path/to/your/background-image.jpg';

function ConcessionForm() {
  // State to manage form values
  const [formValues, setFormValues] = useState({
    joinInto: '',
    reason: '',
    approvedBy: '',
    concessionAmount: '',
    reasonDescription: '',
  });

  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formValues);
    // Add your submission logic here (e.g., API call)
    setTimeout(() => {
      setIsSubmitting(false); // Simulate async submission
    }, 1000);
  };

  return (

        <form onSubmit={handleSubmit}>
          <div className="row mb-3" style={{ marginTop: '40px' }}>
            {/* Left Column: Join Into, Reason, Approved By */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="joinInto" className="form-label">
                  Join Into
                </label>
                <select
                  id="joinInto"
                  name="joinInto"
                  className="form-select rounded-3"
                  value={formValues.joinInto}
                  onChange={handleChange}
                >
                  <option value="">Select Join Into</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Jr Intermediate">Jr Intermediate</option>
                  <option value="Sr Intermediate">Sr Intermediate</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="reason" className="form-label">
                  Reason
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="form-select rounded-3"
                  value={formValues.reason}
                  onChange={handleChange}
                >
                  <option value="">Select Reason</option>
                  <option value="Financial Hardship">Financial Hardship</option>
                  <option value="Academic Merit">Academic Merit</option>
                  <option value="Special Circumstances">Special Circumstances</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="approvedBy" className="form-label">
                  Approved By
                </label>
                <input
                  type="text"
                  id="approvedBy"
                  name="approvedBy"
                  className="form-control rounded-3"
                  placeholder="Enter Approved By"
                  value={formValues.approvedBy}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Right Column: Concession Amount, Reason Description */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="concessionAmount" className="form-label">
                  Concession Amount
                </label>
                <textarea
                  type="number"
                  rows='3'
                  id="concessionAmount"
                  name="concessionAmount"
                  className="form-control rounded-3"
                  placeholder="Enter Concession Amount"
                  value={formValues.concessionAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="reasonDescription" className="form-label">
                  Reason Description
                </label>
                <textarea
                  id="reasonDescription"
                  name="reasonDescription"
                  className="form-control rounded-3"
                  rows="4"
                  placeholder="Enter Reason Description"
                  value={formValues.reasonDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Center the Print Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              type="submit"
              className="btn btn-primary rounded-3 px-5 py-2"
              style={{ width: '250px', textTransform: 'none' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Printing...' : 'Print'}
            </button>
          </div>
        </form>
    //   </div>
    // </div>
  );
}

export default ConcessionForm;