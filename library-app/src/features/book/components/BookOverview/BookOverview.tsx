import React from 'react';
import {useSelector} from 'react-redux';

import './BookOverview.css';
import { RootState } from '../../../../redux/ReduxStore';
import { BookInformation } from '../..';
import { BookSubjects } from '../BookSubjects/BookSubjects';
import { BookAdditionalInfo } from '../BookAdditionalInfo/BookAdditionalInfo';
import { BookHistory } from '../BookHistory/BookHistory';
import Loading from '../../../loading/loading';

export const BookOverview:React.FC = () => {
    const bookState = useSelector((state:RootState) => state.book);
    const user = useSelector((state:RootState) => state.authentication.loggedInUser);

    return(
        <div className="book-overview">
                {
                  bookState.loading ? (
                    <Loading />  // Render the Loading component while loading
                  ) : (
                    bookState.currentBook && (
                      <>
                        <BookInformation book={bookState.currentBook} />
                        <BookSubjects subjects={bookState.currentBook.subjects} />
                        <BookAdditionalInfo book={bookState.currentBook} />
                        {user?.type === 'EMPLOYEE' && <BookHistory book={bookState.currentBook} />}
                      </>
                    )
                  )
                }
        </div>

    )
}