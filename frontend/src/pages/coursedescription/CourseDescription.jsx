import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();
  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    const {
      data: { order },
    } = await axios.post(
      `${server}/api/course/checkout/${params.id}`,
      {},
      {
        headers: { token },
      }
    );

    const options = {
      key: "rzp_test_WpTfHscPGFJgHQ",
      amount: order.id,
      currency: "INR",
      name: "Nice and Easy",
      description: "Train with us",
      image: "../../assets/logo.png",
      order_id: order.id,

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

        try {
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: { token },
            }
          );

          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      },
      theme: { color: "#8a4baf" },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="course-description-classnms">
              <div className="course-image-classnms">
                <img src={course.image} alt="Course Preview" />
              </div>
              <div className="course-text-classnms">
                <h2>Master DSA like never before</h2>
                <p>
                  Join thousands of students who are transforming their coding careers with our
                  comprehensive Data Structures and Algorithms course.
                </p>
                <div className="course-buttons-classnms">
                  <button onClick={checkoutHandler} className="btn-classnms red">Buy Course</button>
                </div>
              </div>

              {/* Right Section - Course Image */}
              
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;
