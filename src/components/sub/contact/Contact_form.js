import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ContactForm() {
  const history = useHistory();
  const errMessage = {};
  const [submit, setSubmit] = useState(false);
  const [err, setErr] = useState({});
  const [currentValue, setCurrentValue] = useState({
    userName: '',
    userId: '',
    userPwd: '',
    userPwdCheck: '',
    userEmail: '',
    userText: ''
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCurrentValue({ ...currentValue, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkVaildation(currentValue);
    setErr(errMessage);
    setSubmit(true);
  };
  const checkVaildation = (value) => {
    nameValidation(value.userName);
    idValidation(value.userId);
    pwdValidation(value.userPwd);
    checkPwdValidation(value.userPwd, value.userPwdCheck);
    emailValidation(value.userEmail);
    textValidation(value.userText);
  };

  const nameValidation = (name) => {
    const reg = /[a-bA-Zㄱ-힣]/;
    if (!reg.test(name) || name.length < 2) {
      errMessage.userName = '이름은 한글또는 영문으로 최소 2자리 이상 입력해주세요';
    }
  };
  const idValidation = (id) => {
    const reg = /^[0-9a-z]+$/;
    if (!reg.test(id) || id.length < 5) {
      errMessage.userId = '아이디는 한글또는 영문을 포함해 최소 5자리 이상 입력해주세요';
    }
  };
  const pwdValidation = (pwd) => {
    const reg = /^[A-Za-z0-9]{6,12}$/;
    if (!reg.test(pwd)) {
      errMessage.userPwd =
        '숫자와 영문을 포함한 형태의 6~12자리 이내의 비밀번호로 다시 입력해주세요';
    }
  };
  const checkPwdValidation = (pwd, userPwdCheck) => {
    if (pwd !== userPwdCheck || !userPwdCheck.trim()) {
      errMessage.userPwdCheck = '비밀번호가 서로 다릅니다. 확인하고 다시 입력해주세요';
    }
  };
  const emailValidation = (email) => {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!reg.test(email)) {
      errMessage.userEmail = '이메일을 재입력해주세요';
    }
  };
  const textValidation = (text) => {
    if (!text.trim() || text.length < 10) {
      errMessage.userText = '메세지는 최소 10글자 이상 입력해주세요';
    }
  };
  const resetForm = () => {
    setErr({});
    setCurrentValue({});
    setSubmit(false);
  };
  useEffect(() => {
    const isSend = Object.keys(err).length;
    console.log(err);
    if (isSend === 0 && submit) {
      alert('회원가입이 완료되었습니다.');
      history.push('/');
    }
  }, [err, history, submit]);

  return (
    <article>
      <h2>Send a Message</h2>
      <p>
        A place where rare and unexpected pleasures are artfully woven into every stay and guests
        unlock unique and enriching moments.
      </p>
      <form action='none' onSubmit={submitHandler}>
        <fieldset>
          <legend className='hidden'>회원가입 양식</legend>
          <table border='0'>
            <tbody>
              <tr>
                <th scope='row'>
                  <label htmlFor='userName'>NAME</label>
                </th>
                <td>
                  <input onChange={changeHandler} type='text' name='userName' id='userName' />
                  <span>{err.userName}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='userId'>ID</label>
                </th>
                <td>
                  <input onChange={changeHandler} type='text' name='userId' id='userId' />
                  <span>{err.userId}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='userPwd'>PASSWORD</label>
                </th>
                <td>
                  <input onChange={changeHandler} type='password' name='userPwd' id='userPwd' />
                  <span>{err.userPwd}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='userPwdCheck'>PASSWORD CHECK</label>
                </th>
                <td>
                  <input
                    onChange={changeHandler}
                    type='password'
                    name='userPwdCheck'
                    id='userPwdCheck'
                  />
                  <span>{err.userPwdCheck}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='userPwdCheck'>EMAIL</label>
                </th>
                <td>
                  <input onChange={changeHandler} type='text' name='userEmail' id='userEmail' />
                  <span>{err.userEmail}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <label htmlFor='userText'>MESSAGE</label>
                </th>
                <td>
                  <textarea
                    onChange={changeHandler}
                    name='userText'
                    id=''
                    cols='30'
                    rows='10'
                  ></textarea>
                  <span>{err.userText}</span>
                </td>
              </tr>
              <tr colSpan='2'>
                <th>
                  <input className='globalButton' type='reset' value='RESET' onClick={resetForm} />
                  <input className='globalButton' type='submit' value='SEND' />
                </th>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </article>
  );
}

export default ContactForm;
