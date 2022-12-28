import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="item-block"
    speed={2}
    width={280}
    height={485}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="3" rx="17" ry="17" width="260" height="260" />
    <rect x="0" y="277" rx="10" ry="10" width="260" height="27" />
    <rect x="0" y="319" rx="12" ry="12" width="260" height="88" />
    <rect x="0" y="422" rx="12" ry="12" width="95" height="30" />
    <rect x="143" y="423" rx="23" ry="23" width="116" height="37" />
  </ContentLoader>
);

export default Skeleton;
