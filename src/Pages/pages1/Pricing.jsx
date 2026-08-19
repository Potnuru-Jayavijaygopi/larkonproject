import React, { useState, useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { pricingAPI } from '../../services/api';

const defaultPlans = [
  {
    id: 1,
    plan_name: 'FREE PACK',
    price_in_dollars: '0',
    billing_cycle: 'Month',
    storage: '5 GB',
    bandwidth: '100 GB',
    domains: 1,
    email_support: false,
    support: 'No Support',
    users: '1 User',
    is_popular: false,
  },
  {
    id: 2,
    plan_name: 'PROFESSIONAL PACK',
    price_in_dollars: '19',
    billing_cycle: 'Month',
    storage: '50 GB',
    bandwidth: '900 GB',
    domains: 2,
    email_support: true,
    support: '24x7 Support',
    users: '5 Users',
    is_popular: true,
  },
  {
    id: 3,
    plan_name: 'BUSINESS PACK',
    price_in_dollars: '29',
    billing_cycle: 'Month',
    storage: '500 GB',
    bandwidth: '2.5 TB',
    domains: 5,
    email_support: true,
    support: '24x7 Support',
    users: '10 Users',
    is_popular: false,
  },
  {
    id: 4,
    plan_name: 'ENTERPRISE PACK',
    price_in_dollars: '49',
    billing_cycle: 'Month',
    storage: '2 TB',
    bandwidth: 'Unlimited',
    domains: 50,
    email_support: true,
    support: '24x7 Support',
    users: 'Unlimited Users',
    is_popular: false,
  },
];

function Pricing() {
  const [plans, setPlans] = useState(defaultPlans);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const data = await pricingAPI.getPlans();
        if (Array.isArray(data) && data.length > 0) {
          setPlans(data);
        }
      } catch (err) {
        console.warn('Using default pricing plans view:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);

  const formatPrice = (price) => {
    if (price === undefined || price === null) return '$0';
    const num = parseFloat(price);
    return isNaN(num) ? `$${price}` : `$${Math.round(num)}`;
  };

  const getFeaturesList = (plan) => {
    const list = [];
    
    // 1. Storage
    if (plan.storage) {
      list.push(`${plan.storage} Storage`);
    }

    // 2. Bandwidth
    if (plan.bandwidth) {
      list.push(
        plan.bandwidth.toLowerCase().includes('bandwidth') || plan.bandwidth.toLowerCase().includes('storage')
          ? plan.bandwidth
          : `${plan.bandwidth} Bandwidth`
      );
    }

    // 3. Domains
    if (plan.domains !== undefined && plan.domains !== null) {
      list.push(`${plan.domains} Domain${plan.domains === 1 ? '' : 's'}`);
    }

    // 4. Email Support / Support Details
    if (plan.email_support) {
      list.push('Email Support');
    } else if (plan.support && plan.support.toLowerCase().includes('no support')) {
      list.push('No Support');
    }

    // 5. 24x7 Support
    if (plan.support && !plan.support.toLowerCase().includes('no support')) {
      list.push(plan.support);
    } else if (!plan.email_support) {
      list.push('24x7 Support');
    }

    // 6. Users
    if (plan.users) {
      list.push(
        plan.users.toLowerCase().includes('user') ? plan.users : `${plan.users} Users`
      );
    }

    return list;
  };

  return (
    <div className='container-fluid p-4'>
      <div className='text-center my-4'>
        <h3 className='fw-bold text-dark mb-2'>Simple Pricing Plans</h3>
        <p className='text-muted mx-auto' style={{ maxWidth: '560px', fontSize: '0.875rem' }}>
          Get the power and control you need to manage your organization's technical documentation
        </p>
      </div>

      <div className='row g-4 justify-content-center mt-2'>
        {plans.map((plan) => {
          const isPopular = Boolean(
            plan.is_popular ||
            (plan.plan_name && plan.plan_name.toLowerCase().includes('professional'))
          );
          const features = getFeaturesList(plan);

          return (
            <div key={plan.id} className='col-xl-3 col-lg-6 col-md-6'>
              <div className='card h-100 border-0 shadow-sm rounded-3 p-4 bg-white position-relative'>
                {isPopular && (
                  <span
                    className='badge position-absolute top-0 end-0 m-3 text-white px-2 py-1 text-uppercase'
                    style={{ backgroundColor: '#ff5e29', fontSize: '0.65rem', fontWeight: '600' }}
                  >
                    Popular
                  </span>
                )}

                <span
                  className='text-uppercase text-muted fw-bold mb-3 d-block'
                  style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                >
                  {plan.plan_name}
                </span>

                <div className='d-flex align-items-baseline mb-4'>
                  <h1 className='fw-bold text-dark mb-0 me-1' style={{ fontSize: '2.25rem' }}>
                    {formatPrice(plan.price_in_dollars)}
                  </h1>
                  <span className='text-muted small'>
                    / {plan.billing_cycle || 'Month'}
                  </span>
                </div>

                <ul className='list-unstyled mb-4 flex-grow-1' style={{ fontSize: '0.825rem' }}>
                  {features.map((feature, idx) => (
                    <li key={idx} className={`d-flex align-items-center ${idx < features.length - 1 ? 'mb-3' : ''} text-secondary`}>
                      <BsCheckCircleFill className='me-2 text-danger opacity-75' style={{ fontSize: '0.85rem' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {isPopular ? (
                  <button
                    className='btn text-white w-100 py-2 rounded-3 border-0 fw-medium mt-auto'
                    style={{ backgroundColor: '#ff9066', fontSize: '0.85rem' }}
                  >
                    Current Plan
                  </button>
                ) : (
                  <button
                    className='btn text-white w-100 py-2 rounded-3 border-0 fw-medium mt-auto'
                    style={{ backgroundColor: '#ff5e29', fontSize: '0.85rem' }}
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;