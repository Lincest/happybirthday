函数生日（      ）          {
    setTimeout          (           “生日(）”，1000）；窗户。
        生日=新日期(            "12/12/2007 00:00:00"           ) ; // 修改出生日期
        今天=新日期(          ) ;
        timeold = (今天.getTime         (        ) - 生日.getTime       (      )     ) ;
        秒时间旧值 = 时间旧值 / 1000
        秒售=数学。地板( sectimeold ) ;
        每日几十个数 = 24 * 60 * 60 * 1000
        e_daysold = timeold / msPerDay
        销售天数 = 数学。楼层（ e_daysold ）；
        e_hrsold = ( e_daysold - 天数) * 24 ;
        hrsold = 数学。楼层（ e_hrsold ）；
        e_minsold = ( e_hrsold - hrsold ) * 60 ;
        最低销量 = 数学。地板（（ e_hrsold - hrsold ） * 60）；
        秒=数学。下限(   ( e_minsold - minsold ) * 60  ) ;
        span_dt_dt。innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + Seconds + "秒" ;
    }
    生日（） ;
