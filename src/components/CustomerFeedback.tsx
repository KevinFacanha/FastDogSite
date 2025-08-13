import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  product?: string;
  avatar?: string;
}

const CustomerFeedback: React.FC = () => {
  const reviews: CustomerReview[] = [
    {
      id: '1',
      name: 'Carla',
      location: 'São Paulo • SP',
      rating: 5,
      review: 'Meu cachorro adora os petiscos da Natuka! A Trança Bovina é perfeita para ele, que é um mordedor compulsivo. Recomendo muito!',
      product: 'Natuka Trança Bovina'
    },
    {
      id: '2',
      name: 'João',
      location: 'São Paulo • SP',
      rating: 4.5,
      review: 'Produtos de excelente qualidade. Meu Golden ficou mais calmo desde que começou a usar os mastigáveis. Entrega rápida também!',
      product: 'Spiral Extreme Good Lovin'
    },
    {
      id: '3',
      name: 'Maria',
      location: 'São Paulo • SP',
      rating: 5,
      review: 'Comprei para minha cachorrinha e ela adorou! Os petiscos são naturais e duram bastante. Vou comprar mais!',
      product: 'Natuka Puff'
    },
    {
      id: '4',
      name: 'Ana',
      location: 'São Paulo • SP',
      rating: 4.5,
      review: 'Os petiscos são ótimos e meu cachorro adora! Recomendo demais a fastdog.',
      product: 'Natuka Trança Bovina'
    },
    {
      id: '5',
      name: 'Pedro',
      location: 'São Paulo • SP',
      rating: 5,
      review: 'Excelente qualidade e entrega rápida. Meu cachorro está muito mais feliz com os novos petiscos.',
      product: 'Spiral Extreme Good Lovin'
    },
    {
      id: '6',
      name: 'Fernanda',
      location: 'São Paulo • SP',
      rating: 4.5,
      review: 'Gostei muito dos petiscos, mas acho que o preço poderia ser um pouco mais acessível.',
      product: 'Natuka Puff'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-orange-500 fill-current'
            : index < rating
            ? 'text-orange-500 fill-current opacity-60'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-red-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200" aria-labelledby="feedback-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="feedback-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Feedback dos Clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Veja o que os tutores estão falando sobre nossos petiscos.
          </p>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-center mb-4">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={`${review.name}`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 ${getAvatarColor(review.name)}`}>
                      {getInitials(review.name)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {review.name} • {review.location}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex mr-2" aria-label={`Avaliação ${review.rating} de 5`}>
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  "{review.review}"
                </p>

                {/* Product Name (if available) */}
                {review.product && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Produto: {review.product}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;