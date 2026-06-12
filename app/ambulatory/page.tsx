import type { Metadata } from 'next';
import AmbulatoryTabs from './AmbulatoryTabs';

export const metadata: Metadata = { title: 'Амбулаторна допомога' };

export default function AmbulatoryPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Амбулаторна допомога</h1>
          <p>Поліклінічні відділення та діагностичні служби</p>
        </div>
      </div>

      <AmbulatoryTabs />
    </>
  );
}
