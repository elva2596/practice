/**转义字符
 * \w：匹配数字、字母、下划线
 * \W：匹配数字、字母、下划线以外的字符
 * \s：匹配空白字符，如空格、tab等
 * \S：匹配非空白字符
 * \d：匹配数字字符，0-9
 * \D：匹配非数字字符
 * \b：匹配单词的边界
 * \B：匹配非单词边界
 * 
 * 
 * 字符集和
 * [abc]：匹配a b 或c
 * [^abc]:匹配a b c 之外的任意字符；^在[]表示非
 * 
 * 量词
 * {n}：匹配n次
 * {m,n}:匹配m-n次，优先匹配n次
 * {m,}：匹配m-正无穷次，优先匹配无穷次
 * ?：匹配0次或1次，优先匹配1次
 * +:匹配1-n次，优先匹配n次
 * *：匹配0-n次，优先匹配n次
 * 【注】:正则默认匹配模式为贪婪模式，凡是表示范围的量词，都优先匹配上限而不是下限
 * 
 * a{1,3} 匹配字符'aaa'的话，会匹配aaa而不是a
 * a{1,3}? 匹配字符串'aaa'的话会匹配a而不是aaa;非贪婪模式
 * 
 * 
 * 
 * 分组和引用；
 *  语法:(), ()不能放在[]中使用，但是[]可以放在()中使用
 * 
 *  分组默认是捕获分组:
 *    捕获分组:
 *      00123-456665'.match(/(123)-?(456)/)
 *      // 返回 ["123-456", "123", "456", index: 2, input: "00123-456665", groups: undefined]
 * 
 *    非捕获组:
 *      '00123-456665'.match(/(?:123)-?(456)/) 
 *     // 返回 ["123-456", "456", index: 2, input: "00123-456665", groups: undefined]
 * 
 * 
 * 
 * 前瞻(预搜索)
 *  正向：？=后面只能有什么   1(?=2) 可以匹配12,不能匹配22
 *  反向: ?!后面不能有什么   1(?!2) 可以匹配22，不能匹配12
 * 
 * 
 * 
 *修饰符:
    g：正则遇到第一个匹配的字符就会结束，加上全局修饰符，可以让其匹配到结束
    i：正则默认是区分大小写的,i可以忽略大小学
    m: 正则默认情况下，^和$只能匹配字符串的开始和结尾，m修饰符可以让^和$匹配行首和行尾

    /jing$/ :能够匹配'yanhaijing'，不能匹配 'yanhaijing\n'
    /jing$/m: 能够匹配 'yanhaijing', 能匹配 'yanhaijing\n
 * 
 * 
 * 元字符:
 *  ({[\^$|?*.]})
 */



 /**
  * RegExp实例属性
  * 
  */

  const pattern1 = /\[bc\]at/i;
  console.log(pattern1.global)
  console.log(pattern1.ignoreCase)
  console.log(pattern1.lastIndex)//表示开始搜索下一个匹配项的字符位置。
  console.log(pattern1.source) //正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。
 console.log('------')

/**
 * RegExp实例方法；
 * 1. exec专门为捕获组设计的
 *    即使在模式中设置了全局标志g,它每次也只会返回一个匹配项
 *    在不设置全局标志的情况下，在同一个字符串上多次调用exec()将始终返回第一个匹配项的信息，
 *    在设置全局标志的情况下，每次调用exec()则都会在字符串中继续查找新匹配项
 * 2. test，返回值是boolean值
 */

 const text = 'cat， bat， sat， fat';
 const pattern2 = /.at/;
 let matches;
 matches = pattern2.exec(text);//index:匹配项在字符串中的位置
 console.log(matches.index);
 console.log(matches[0]);
 console.log(pattern2.lastIndex)
console.log('-----------')
 matches = pattern2.exec(text)
 console.log(matches.index)
 console.log(matches[0]);
 console.log(pattern2.lastIndex)
console.log('-----')
 const pattern3 = /.at/g;

let matches1 = pattern3.exec(text);
 console.log(matches1.index);
 console.log(matches1[0]);
 console.log(pattern3.lastIndex)
 console.log('------')
 matches1 = pattern3.exec(text)
 console.log(matches1.index);
 console.log(matches1[0])
 console.log(pattern3.lastIndex)
