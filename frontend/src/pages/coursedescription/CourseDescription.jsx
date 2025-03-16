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
        headers: {
          token,
        },
      }
    );

    const options = {
      key: "rzp_test_WpTfHscPGFJgHQ", // Enter the Key ID generated from the Dashboard
      amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Nice and Easy", //your business name
      description: "Train with us",
      image: "../../assets/logo.png", // Your logo
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: {
                token,
              },
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
      theme: {
        color: "#8a4baf",
      },
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
            <div className="course-description">
              <div className="upper-course-description">
                <div className="course-description-course-header">
                  <img
                    src={`${course.image}`}
                    alt=""
                    className="course-description-course-image"
                  />
                  <div className="course-description-course-info">
                    <h2>{course.title}</h2>
                    <p><span>Instructor:</span> {course.createdBy}</p>
                    <p><span>Duration:</span> {course.duration} weeks</p>
                  </div>
                </div>

                <div className="course-description-description">
                  <div className="descrip-heading" ><span  >Course Description:</span><p>{course.description}</p></div>

                  <div className="getStarted-course-description" >Let's get started with course At <span className="price-tag" >₹{course.price}</span></div>
                </div>
              </div>

              {user && user.subscription.includes(course._id) ? (
                <div className="btnbtncourse-description"><button
                onClick={() => navigate(`/course/study/${course._id}`)}
                className="course-description-start-btn course-description-buy-btn"
              >
                Start Training
              </button></div>
              ) : (
                <div className="btnbtncourse-description"><button onClick={checkoutHandler} className="course-description-buy-btn">
                Buy Now
              </button></div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;
