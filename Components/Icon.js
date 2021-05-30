import React, {memo} from 'react';
import {TextProps} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesignIcons from 'react-native-vector-icons/AntDesign';

const IconSets = {
  Entypo: 'Entypo',
  EvilIcons: 'EvilIcons',
  Feather: 'Feather',
  FontAwesome: 'FontAwesome',
  FontAwesome5: 'FontAwesome5',
  Foundation: 'Foundation',
  Ionicons: 'Ionicons',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  Zocial: 'Zocial',
  SimpleLineIcons: 'SimpleLineIcons',
  AntDesign: 'AntDesign',
};

const Icons = props => {
  switch (props.type) {
    case IconSets.Entypo:
      return <IconEntypo {...props} />;
    case IconSets.EvilIcons:
      return <IconEvilIcons {...props} />;
    case IconSets.Feather:
      return <IconFeather {...props} />;
    case IconSets.FontAwesome:
      return <IconFontAwesome {...props} />;
    case IconSets.FontAwesome5:
      return <IconFontAwesome5 {...props} />;
    case IconSets.Foundation:
      return <IconFoundation {...props} />;
    case IconSets.Ionicons:
      return <IconIonicons {...props} />;
    case IconSets.MaterialIcons:
      return <IconMaterialIcons {...props} />;
    case IconSets.MaterialCommunityIcons:
      return <IconMaterialCommunityIcons {...props} />;
    case IconSets.Octicons:
      return <IconOcticons {...props} />;
    case IconSets.Zocial:
      return <IconZocial {...props} />;
    case IconSets.SimpleLineIcons:
      return <IconSimpleLineIcons {...props} />;
    case IconSets.AntDesign:
      return <IconAntDesignIcons {...props} />;
    default:
      return <IconFontAwesome {...props} />;
  }
};

export default Icons;
