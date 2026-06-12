import type { Metadata } from 'next';
import ServicesTabs from './ServicesTabs';

export const metadata: Metadata = { title: 'Платні послуги' };

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Платні послуги</h1>
          <p>Додаткові медичні послуги та обстеження</p>
        </div>
      </div>

      <ServicesTabs />
    </>
  );
}
