import CustomLayout from './wrap-page-elements';
// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

// custom CSS styles
import './src/global.css';

export const onRenderBody = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({
    style: {
      height: '100%',
    },
  });
  setBodyAttributes({
    style: {
      minHeight: '100%',
      display: 'flex',
    },
  });
};

export const wrapPageElement = CustomLayout;
