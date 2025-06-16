import {FaEarListen, FaHandshake, FaMagnifyingGlass, FaLightbulb, FaClipboardList, FaHammer} from 'react-icons/fa6';
import DesignProcessItem from './DesignProcessItem';

const processData = [
  {
    Icon: FaEarListen,
    title: 'Listen',
    details: [
      'Holding client-designer meeting.',
      'Understanding client requirement.',
      'Research / Collecting related data.'
    ]
  },
  {
    Icon: FaHandshake,
    title: 'Agree',
    details: [
      'Discussion with client on proposal, estimation & schedule of work.',
      'Signing of contract.'
    ]
  },
  {
    Icon: FaMagnifyingGlass,
    title: 'Analyse',
    details: [
      'Site analysis & its context.',
      'Workout layout options.',
      'Create scope of work.'
    ]
  },
  {
    Icon: FaLightbulb,
    title: 'Strategy & Estimate',
    details: [
      'Developing a design strategy / style.',
      'Estimation based on scope of work.'
    ]
  },
  {
    Icon: FaClipboardList,
    title: 'Detailing',
    details: [
      'Decoding the design.',
      'Detailing the design.',
      'Aesthetics'
    ]
  },
  {
    Icon: FaHammer,
    title: 'Build',
    details: [
      'Submission of bill of quantities.',
      'Presentation of schedule & execution.',
      'Execute the project & handover in time.'
    ]
  }
];

const DesignProcess: React.FC<any> = (props) => (
  <section className="py-10 my-5 px-4 mx-auto">
    <h2 className="text-2xl font-bold mb-8 text-center text-gray-600">Design Process</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {processData.map((item, idx) => (
        <DesignProcessItem key={idx} {...item} />
      ))}
    </div>
  </section>
);

export default DesignProcess;
