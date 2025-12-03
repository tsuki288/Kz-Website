// components/Testimonials.jsx
import { useState, useEffect } from "react";
import { ReviewForm } from "./ReviewForm";

// Initial testimonials data
const initialTestimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Event Planner",
    rating: 5,
    comment: "Excellent quality! The custom mugs for our corporate event were perfect. Everyone loved them!",
    date: "2024-02-15",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    role: "Small Business Owner",
    rating: 5,
    comment: "Fast delivery and great communication. Our branded shirts came out better than expected!",
    date: "2024-02-10",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    name: "Sophia Reyes",
    role: "School Coordinator",
    rating: 4,
    comment: "Great service for our school's graduation souvenirs. The prices are very reasonable.",
    date: "2024-02-05",
    avatar: "👩‍🏫"
  },
  {
    id: 4,
    name: "Miguel Torres",
    role: "Marketing Manager",
    rating: 5,
    comment: "Professional team with amazing attention to detail. Will definitely order again!",
    date: "2024-01-28",
    avatar: "👨‍💻"
  },
  {
    id: 5,
    name: "Andrea Lim",
    role: "Wedding Planner",
    rating: 5,
    comment: "The personalized wedding favors were beautiful! Our clients were thrilled with the quality.",
    date: "2024-01-20",
    avatar: "👰‍♀️"
  },
  {
    id: 6,
    name: "Carlos Gomez",
    role: "Startup Founder",
    rating: 4,
    comment: "Good quality products and responsive customer service. Helped us with our branding needs.",
    date: "2024-01-15",
    avatar: "🧑‍🚀"
  }
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [hoveredRating, setHoveredRating] = useState(0);

  // Load testimonials from localStorage
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('kzCraftingTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  // Save testimonials to localStorage
  useEffect(() => {
    localStorage.setItem('kzCraftingTestimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleAddReview = (newReview) => {
    const reviewToAdd = {
      id: testimonials.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0],
      avatar: getRandomAvatar()
    };
    setTestimonials([reviewToAdd, ...testimonials]);
    setShowReviewForm(false);
  };

  const getRandomAvatar = () => {
    const avatars = ["👨‍💼", "👩‍💼", "👨‍💻", "👩‍💻", "👨‍🎨", "👩‍🎨", "👨‍🏫", "👩‍🏫", "🧑‍🚀", "👩‍🚀"];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === "all") return true;
    if (filter === "5-star") return testimonial.rating === 5;
    if (filter === "4-star") return testimonial.rating >= 4;
    if (filter === "recent") {
      const testimonialDate = new Date(testimonial.date);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return testimonialDate >= thirtyDaysAgo;
    }
    return true;
  });

  const calculateAverageRating = () => {
    if (testimonials.length === 0) return 0;
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonials.length).toFixed(1);
  };

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive ? () => onRate(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
            className={`text-2xl ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            disabled={!interactive}
          >
            {star <= (interactive ? hoveredRating || rating : rating) ? "⭐" : "☆"}
          </button>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-orange-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Customer Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Hear from our satisfied customers about their experience with Kz Crafting.
          </p>

          {/* Overall Rating */}
          <div className="bg-white rounded-xl p-6 shadow-lg inline-block mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600">{calculateAverageRating()}</div>
                <div className="text-gray-600">out of 5</div>
              </div>
              <div className="border-l border-gray-200 h-16"></div>
              <div>
                <div className="mb-2">{renderStars(parseFloat(calculateAverageRating()))}</div>
                <div className="text-gray-600">
                  Based on {testimonials.length} {testimonials.length === 1 ? 'review' : 'reviews'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Add Review Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "all" ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All Reviews ({testimonials.length})
            </button>
            <button
              onClick={() => setFilter("5-star")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "5-star" ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              ⭐⭐⭐⭐⭐ 5 Star
            </button>
            <button
              onClick={() => setFilter("4-star")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "4-star" ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              ⭐⭐⭐⭐ 4+ Star
            </button>
            <button
              onClick={() => setFilter("recent")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === "recent" ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Recent (30 days)
            </button>
          </div>

          {/* Add Review Button */}
          <button
            onClick={() => setShowReviewForm(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <span className="text-xl">+</span> Leave a Review
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Header with Avatar and Info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-1">{renderStars(testimonial.rating)}</div>
                  <span className="text-sm text-gray-500">{formatDate(testimonial.date)}</span>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4 line-clamp-3">{testimonial.comment}</p>

              {/* Rating Badge */}
              <div className="inline-block px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                {testimonial.rating} Star Rating
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No reviews found</h3>
            <p className="text-gray-600 mb-6">Be the first to leave a review!</p>
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Write First Review
            </button>
          </div>
        )}

        {/* Review Form Modal */}
        {showReviewForm && (
          <ReviewForm
            onSubmit={handleAddReview}
            onClose={() => setShowReviewForm(false)}
          />
        )}
      </div>
    </section>
  );
}