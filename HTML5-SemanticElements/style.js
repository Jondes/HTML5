import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container': {
    'width': [{ 'unit': 'px', 'value': 600 }],
    'height': [{ 'unit': 'px', 'value': 600 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': 'orange',
    'textAlign': 'center'
  },
  'header': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 120 }],
    'width': [{ 'unit': 'px', 'value': 560 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': '#c3c3c3'
  },
  'nav': {
    'width': [{ 'unit': 'px', 'value': 530 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': '#c3c3c3'
  },
  'ul': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7e7e7' }],
    'backgroundColor': '#c3c3c3'
  },
  'li': {
    'float': 'left'
  },
  'li a': {
    'display': 'block',
    'color': '#666',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }],
    'textDecoration': 'none'
  },
  'li a:hover:not(active)': {
    'backgroundColor': '#ddd'
  },
  'li aactive': {
    'color': 'white',
    'backgroundColor': '#ddd'
  },
  'wrapper': {
    'width': [{ 'unit': 'px', 'value': 560 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': '#c3c3c3',
    'textAlign': 'center'
  },
  'content': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'height': [{ 'unit': 'px', 'value': 220 }],
    'width': [{ 'unit': 'px', 'value': 320 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': '#c3c3c3'
  },
  'subcontent': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'width': [{ 'unit': 'px', 'value': 305 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  'sidebar': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 8 }],
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 190 }],
    'height': [{ 'unit': 'px', 'value': 220 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': '#c3c3c3'
  },
  'footer': {
    'width': [{ 'unit': 'px', 'value': 560 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7f7f7f' }],
    'background': '#c3c3c3',
    'textAlign': 'center'
  }
});
