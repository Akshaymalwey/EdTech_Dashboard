import TopBar from "../component/TopBar";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "John Doe",
    progress: "54%",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    instructor: "Jane Smith",
    progress: "45%",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    instructor: "Dr. AI",
    progress: "47%",
  },
  {
    id: 4,
    title: "Operating Systems",
    instructor: "Prof. Alan Turing",
    progress: "60%",
  },
  {
    id: 5,
    title: "Database Management Systems",
    instructor: "Dr. R. Elmasri",
    progress: "72%",
  },
  {
    id: 6,
    title: "Computer Networks",
    instructor: "Prof. Radia Perlman",
    progress: "38%",
  },
  {
    id: 7,
    title: "Design Thinking",
    instructor: "Ms. Emily Stanford",
    progress: "85%",
  },
  {
    id: 8,
    title: "Introduction to Psychology",
    instructor: "Dr. Lisa Feldman",
    progress: "25%",
  },
  {
    id: 9,
    title: "Public Speaking & Communication",
    instructor: "Mr. Jordan Clark",
    progress: "90%",
  },
  {
    id: 10,
    title: "Software Engineering Principles",
    instructor: "Dr. Martin Fowler",
    progress: "68%",
  },
];

const MyCourses = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <TopBar />
      <div className="flex flex-col items-center justify-center lg:p-6">
        <div className="flex flex-row items-center justify-between w-full pl-20 pr-20 pb-10 pt-10 max-sm:mt-25 mt-20">
          <h2 className="text-2xl font-bold">My Courses</h2>
          <a
            href="/dashboard"
            className="btn btn-outline btn-sm rounded-full px-4 text-sm"
          >
            Back
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-base-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500">
                Instructor: {course.instructor}
              </p>
              <div className="mt-2">
                <progress
                  className="progress progress-primary w-full"
                  value={parseInt(course.progress)}
                  max="100"
                ></progress>
                <p className="text-right text-xs mt-1 text-gray-600">
                  {course.progress} complete
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
