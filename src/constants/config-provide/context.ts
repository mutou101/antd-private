import React from 'react';

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `AntdPrivate-${suffixCls}` : 'AntdPrivate';
  },
});

export const TablePlusOptionContext = React.createContext<any>({
  leftOption: [],
  rightOption: []
});

export const ConfigConsumer = ConfigContext.Consumer;

export const TablePlusOptionConsumer = TablePlusOptionContext.Consumer;

