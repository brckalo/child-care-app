import {
  useEffect,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  Badge,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';

const IndicatorContainer = ({ status }) => {
  const [data, setData] = useState(undefined);

  const { t } = useTranslation();

  useEffect(() => {
    if (status) {
      setData({
        tooltip: t('Available'),
        badge: 'success'
      });
    } else {
      setData({
        tooltip: t('Inavailable'),
        badge: 'danger'
      });
    }
  }, [status]);

  return (
    <OverlayTrigger
      overlay={
        <Tooltip>
          {data?.tooltip}
        </Tooltip>
      }
      placement='top'
    >
      <Badge
        bg={data?.badge}
        pill
        style={{
          width: '16px',
          height: '16px',
          color: 'transparent'
        }}
      >
        .
      </Badge>
    </OverlayTrigger>
  );
}

export default IndicatorContainer;
