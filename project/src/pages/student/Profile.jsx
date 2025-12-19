function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-700 mb-6">
        Student Profile
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-blue-700 mb-4">
            Personal Information
          </h2>

          <p className="text-gray-600"><strong>Name:</strong> Rahul Patel</p>
          <p className="text-gray-600"><strong>Enrollment No:</strong> 21CE045</p>
          <p className="text-gray-600"><strong>Email:</strong> rahul@ddu.ac.in</p>
          <p className="text-gray-600"><strong>Contact:</strong> 9876543210</p>
        </div>

        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-blue-700 mb-4">
            Academic Information
          </h2>

          <p className="text-gray-600"><strong>Branch:</strong> Computer Engineering</p>
          <p className="text-gray-600"><strong>Semester:</strong> 7</p>
          <p className="text-gray-600"><strong>CGPA:</strong> 8.45</p>
          <p className="text-gray-600"><strong>Backlogs:</strong> None</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
