package coddify.blog.repository;

import coddify.blog.domain.BlogPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
@Component
public interface BlogRepository extends CrudRepository<BlogPost, Long> {

    Page<BlogPost> findAll(Pageable pageable);

    @Override
    Optional<BlogPost> findById(Long aLong);
}
